import { useNavigation, useRoute } from '@react-navigation/native'

import { ColoredStatisticCard } from '@components/ColoredStatisticCard'
import { RegularStatisticCard } from '@components/RegularStatisticCard'

import { Text } from 'react-native'

import { BackButton, BackIcon, ColoredCardsContainer, Container, Content, Header, Percent, Separator, Title } from './styles'
import { useTheme } from 'styled-components/native'


type RouteParams = {
  isSuccessAboveFifity: boolean
}

export function Statistics(){

  const { navigate } = useNavigation()

  const route = useRoute()
  const { isSuccessAboveFifity } = route.params as RouteParams

  const { COLORS } = useTheme()
  
  function handleGoBack(){
    navigate('home')
  }

  return (
    <Container dietSuccessRate={isSuccessAboveFifity}>
      <Header>
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon 
            color= { isSuccessAboveFifity
              ? COLORS.GREEN_DARK
              : COLORS.RED_DARK
            }
          />
        </BackButton>

        <Percent>
          90,86%
        </Percent>
        <Text>
          das refeições dentro da dieta
        </Text>
      </Header>

      <Content>
        <Title>
          Estatísticas gerais
        </Title>

        <RegularStatisticCard
          title='22'
          text='melhor sequencia de pratos dentro da dieta'
        />

        <RegularStatisticCard
          title='109'
          text='refeições registradas'
        />

        <ColoredCardsContainer>
          <ColoredStatisticCard
            title='99' 
            text='refeições dentro da dieta'
            type='INSIDE'
          />

          <Separator />

          <ColoredStatisticCard
            title='10' 
            text='refeições fora da dieta'
            type='OUTSIDE'
          />
        </ColoredCardsContainer>

      </Content>
    </Container>
  )
}