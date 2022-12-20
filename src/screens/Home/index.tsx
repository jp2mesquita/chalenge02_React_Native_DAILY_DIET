import { Button } from '@components/Button'
import { HomeHeader } from '@components/HomeHeader'
import { useNavigation } from '@react-navigation/native'
import { SectionList } from 'react-native'
import { Container, List, ListTitle, MealCard, MealDietStatus, MealHour, MealName, PercentualText, StatisticsCard, Text, Title } from './styles'

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

  const { navigate } = useNavigation()
  
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
        onPress={() => navigate('statistics')}
      >
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
        renderItem={ ({ item }) => {
          const hour = item.hour
          const name = item.name
          const dietControl = item.dietControl

        return(
          <MealCard>
            <MealHour>
              {hour}
            </MealHour>
            <MealName>
              {name}
            </MealName>
            <MealDietStatus 
              status={dietControl}
            />
          </MealCard>
          
        )}}
      />

    </Container>
  )
}