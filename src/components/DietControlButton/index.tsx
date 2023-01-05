import { Text, TouchableOpacityProps } from "react-native"
import { Container, DietControlButtonStyleProps, MealDietStatus } from "./styled"

interface DietControlButtonProps extends TouchableOpacityProps{
  type: DietControlButtonStyleProps,
  isActive: boolean | undefined
}

export function DietControlButton({type, isActive, ...rest}: DietControlButtonProps){
  return(
    <Container
      isActive={isActive}
      type={type}
      {...rest}
    >
      <MealDietStatus 
        type={type}
        isActive={isActive}
      />
      
      <Text>
        {type === 'INSIDE' ? 'Sim' : 'Não'}
      </Text>
    </Container>
  )
}