import { useNavigation } from '@react-navigation/native'
import { Button, Container, Text } from './styles'

export function Home(){

  const { navigate } = useNavigation()

  return (
    <Container>
      <Text>
        Home
      </Text>
      <Button
        onPress={() => navigate('statistics')}
      >
        <Text>
          Statistics
        </Text>
      </Button>
    </Container>
  )
}