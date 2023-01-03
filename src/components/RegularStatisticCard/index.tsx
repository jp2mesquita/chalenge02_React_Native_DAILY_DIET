import { Container, Text, Title } from "./styles";

interface StatisticCardProps{
  title: string,
  text: string
}

export function RegularStatisticCard({ title, text } : StatisticCardProps){
  return(
    <Container>
      <Title>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
    </Container>
  )
}