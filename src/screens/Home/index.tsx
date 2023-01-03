import { Button } from '@components/Button'
import { HomeHeader } from '@components/HomeHeader'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { SectionList } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, GoFowardIcon, List, ListTitle, MealCard, MealDietStatus, MealHour, MealName, PercentualText, StatisticsCard, Text, Title } from './styles'

type Item = {
  name: string,
  description: string,
  hour: string,
  dietControl: 'INSIDE' | 'OUTSIDE'

}

interface DataProps {
  date: string,
  data: Item[]
}


export function Home(){
  
  const [isSuccessAboveFifity, setIsSuccessAboveFifity ] = useState(true)

  const { navigate } = useNavigation()
  
  const { COLORS } = useTheme()

  const mealRecordData: DataProps[]= [
    {
      date: '12.08.22',
      data: [
        {
          name: 'Vitamina de Banana',
          description: 'Vitamina de banana com morango',
          hour: '09:30',
          dietControl: 'INSIDE'
        },
        {
          name: 'X-TUDO',
          description: 'Xis completo da lancheria do bairro',
          hour: '16:30',
          dietControl: 'OUTSIDE'
        },
      ]
    },
    {
      date: '11.08.22',
      data: [
        {
          name: 'Vitamina de abacate',
          description: 'Vitamina de abacate com morango',
          hour: '09:30',
          dietControl: 'INSIDE'
        },
        {
          name: 'Almoço fitness',
          description: 'Frango Grelhado e Arror',
          hour: '16:30',
          dietControl: 'INSIDE'
        },
        {
          name: 'Shake poś-treino',
          description: 'whey protein, banana, aveia, leite',
          hour: '20:30',
          dietControl: 'INSIDE'
        },
      ]
    }
  ]
   
  return (
    <Container>

      <HomeHeader />
      

      <StatisticsCard
        onPress={() => navigate('statistics', { isSuccessAboveFifity })}
        dietSuccessRate={isSuccessAboveFifity}
      >
        <GoFowardIcon
          color={isSuccessAboveFifity 
            ? COLORS.GREEN_DARK 
            : COLORS.RED_DARK
          }
          size={24}
        />

        <PercentualText>
          90,86%
        </PercentualText>
        <Text>
          das refeições dentro da dieta
        </Text>
      </StatisticsCard>

      <Title>
        Refeições
      </Title>

      <Button 
        title='Nova Refeição'
      />

      <SectionList
        style={{marginTop: 16}}
        showsVerticalScrollIndicator={false}
        sections={mealRecordData as DataProps[]}
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

    </Container>
  )
}