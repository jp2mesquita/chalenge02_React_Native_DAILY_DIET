import { Button } from '@components/Button'
import { HomeHeader } from '@components/HomeHeader'
import { Loading } from '@components/Loading'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { getAllDates } from '@storage/date/getAllDates'
import { getAllMealsByDate } from '@storage/meal/getAllMealsByDate'
import { formatStringToDateInTimestamp } from '@utils/formatStringToDateInTimestamp'
import { formatTimeToSeconds } from '@utils/formatTimeToNumber'
import { mealsInsideTheDietPercentage } from '@utils/metrics/insidePercentage'
import { useCallback, useEffect, useState } from 'react'
import { SectionList } from 'react-native'
import { MealDetailsProps } from 'src/@types/navigation'
import { useTheme } from 'styled-components/native'
import { Container, GoFowardIcon, List, ListTitle, MealCard, MealDietStatus, MealHour, MealName, PercentualText, StatisticsCard, Text, Title } from './styles'

type Item = {
  name: string,
  description: string,
  hour: string,
  dietControl: 'INSIDE' | 'OUTSIDE'

}

export interface MealListProps {
  date: string,
  data: Item[]
}

export interface MetricsProps{
  insideAmount: number;
  outsideAmount: number;
  total: number;
  insidePercentage: number;
  biggestInsideStreak: number;
}

export function Home(){
  
  const { navigate } = useNavigation()
  
  const { COLORS } = useTheme()

  const [isSuccessAboveSeventyFive, setIsSuccessAboveSeventyFive ] = useState(true)
  const [ isLoading, setIsLoading ] = useState(true)


  const [ mealList, setMealList] = useState <MealListProps[]>([])

  function sortMealList(listToSort: MealListProps[]){
    listToSort.forEach(item => item.data.sort(function(a, b){return formatTimeToSeconds(a.hour) - formatTimeToSeconds(b.hour)}))
  
    listToSort.sort((a,b) => formatStringToDateInTimestamp(b.date) - formatStringToDateInTimestamp(a.date));
  }

  async function fetchAllMeals(allDates: string[]){
    let newList: MealListProps[] = []
    allDates.forEach( async (item, index, array) => {
      const data = await getAllMealsByDate(item)
      const newItem = {
        date: item,
        data: data
      }
      newList = [...newList, newItem]
      if(array.length === index+1) { 
        sortMealList(newList) 
        newList != mealList && setMealList(newList)
      }
    })
  }


  const [metrics, setMetrics ] = useState<MetricsProps>({} as MetricsProps)

  function checkIfSuccessIsAboveSeventyFive(metricsResult: MetricsProps){
    metricsResult.insidePercentage >= 75 
        ? setIsSuccessAboveSeventyFive(true) 
        : setIsSuccessAboveSeventyFive(false)
  }

  function metricsCalculator(){
    
    const metricsResult = mealsInsideTheDietPercentage(mealList)
    checkIfSuccessIsAboveSeventyFive(metricsResult)
    
    setMetrics(metricsResult)
    

  }

  async function fetchMealList(){
    try {
      setIsLoading(true)
      const allDates = await getAllDates()
      fetchAllMeals(allDates)

    } catch (error) {
      throw error
    }finally{
      setIsLoading(false)
    }
  }
  

  function handleOpenNewMealScreen(){
    navigate('newMeal')
  }

  useFocusEffect(useCallback( () => {
    fetchMealList()
    
  }, []))

  useEffect(() => {
    !isLoading && metricsCalculator()
  }, [mealList])

  return (
    <Container>

      <HomeHeader />
      
      <StatisticsCard
        onPress={() => navigate('statistics', { metrics, isSuccessAboveSeventyFive  })}
        dietSuccessRate={isSuccessAboveSeventyFive}
      >
        <GoFowardIcon
          color={isSuccessAboveSeventyFive 
            ? COLORS.GREEN_DARK 
            : COLORS.RED_DARK
          }
          size={24}
        />

        { isLoading
          ? null
          : <PercentualText>
              {metrics.insidePercentage}%
            </PercentualText>
        }
        
        <Text>
          das refeições dentro da dieta
        </Text>
      </StatisticsCard>

      <Title>
        Refeições
      </Title>

      <Button 
        title='Nova Refeição'
        onPress={handleOpenNewMealScreen}
      />

      { isLoading
        ? <Loading/>
        : <SectionList
            style={{marginTop: 16}}
            showsVerticalScrollIndicator={false}
            sections={mealList as MealListProps[]}
            keyExtractor={(item) => item.name}
            renderSectionHeader= { ({section: { date }}) => {

              return(
                <ListTitle>
                  {date}  
                </ListTitle>
              ) }
            }
            renderItem={ ({ item, section }) => {
              const date = section.date
            return(
              <MealCard
                onPress={() => navigate('mealDetails', { item, date })}
              >
                <MealHour>
                  {item.hour}
                </MealHour>
                <MealName>
                  {item.name}
                </MealName>
                <MealDietStatus 
                  status={item.dietControl}
                />
              </MealCard>
              
            )}}
          />
      }

    </Container>
  )
}