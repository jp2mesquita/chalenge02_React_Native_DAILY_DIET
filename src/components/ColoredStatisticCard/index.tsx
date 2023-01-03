import { ColoredCardStyledProps, Container, Text, Title } from "./styles";

interface StatisticCardProps{
  title: string,
  text: string,
  type: ColoredCardStyledProps
}

export function ColoredStatisticCard({ title, text, type } : StatisticCardProps){
  return(
    <Container
      type={type}
    >
      <Title>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
    </Container>
  )
}