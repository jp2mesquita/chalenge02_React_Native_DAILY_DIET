import { useNavigation, useRoute } from '@react-navigation/native'

import { ColoredStatisticCard } from '@components/ColoredStatisticCard'
import { RegularStatisticCard } from '@components/RegularStatisticCard'

import { Text } from 'react-native'

import { BackButton, BackIcon, ColoredCardsContainer, Container, Content, Header, Percent, Separator, Title } from './styles'
import { useTheme } from 'styled-components/native'
import { MetricsProps } from '@screens/Home'


type RouteParams = {
  metrics: MetricsProps
  isSuccessAboveSeventyFive: boolean
}

export function Statistics(){

  const { navigate } = useNavigation()

  const route = useRoute()
  const { metrics, isSuccessAboveSeventyFive } = route.params as RouteParams

  const { COLORS } = useTheme()
  
  function handleGoBack(){
    navigate('home')
  }

  return (
    <Container dietSuccessRate={isSuccessAboveSeventyFive}>
      <Header>
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon 
            color= { isSuccessAboveSeventyFive
              ? COLORS.GREEN_DARK
              : COLORS.RED_DARK
            }
          />
        </BackButton>

        <Percent>
          {metrics.insidePercentage}%
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
          title={String(metrics.biggestInsideStreak)}
          text='melhor sequencia de pratos dentro da dieta'
        />

        <RegularStatisticCard
          title={String(metrics.total)}
          text='refeições registradas'
        />

        <ColoredCardsContainer>
          <ColoredStatisticCard
            title={String(metrics.insideAmount)}
            text='refeições dentro da dieta'
            type='INSIDE'
          />

          <Separator />

          <ColoredStatisticCard
            title={String(metrics.outsideAmount)}
            text='refeições fora da dieta'
            type='OUTSIDE'
          />
        </ColoredCardsContainer>

      </Content>
    </Container>
  )
}