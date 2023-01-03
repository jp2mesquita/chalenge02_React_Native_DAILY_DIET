import { Text } from "react-native";
import { Container, MealDietStatus } from "./styles";

interface TagProps{
  status: 'INSIDE' | 'OUTSIDE'
}

export function Tag({ status }: TagProps){
  return(
    <Container>

      <MealDietStatus 
        status={status}
      />

      <Text style={{fontSize: 14}}>
        {status === 'INSIDE' ? 'Dentro' : 'Fora'} da dieta
      </Text>
    </Container>
  )
}