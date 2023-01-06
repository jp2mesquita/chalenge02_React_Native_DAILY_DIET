import {  Image, Text, BackHandler } from "react-native";

import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Subtitle, Title } from "./styles";

import succesImg from '@assets/success.png'
import failImg from '@assets/fail.png'
import { MealDetailsProps } from "src/@types/navigation";

interface RouteParams{
  mealToRegister: {
    date: string;
    data: MealDetailsProps
  }
}


export function RegistrationSuccess(){
  const { navigate } = useNavigation()

  const route = useRoute()
  const { mealToRegister } = route.params as RouteParams

  function handleGoToHome(){
    navigate('home')
  }

  const backAction = () => {
    navigate('home')
    return true
  }

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  )

  const dietControl = mealToRegister.data.dietControl

  return(
    <Container>
      <Title
        dietControl={dietControl}
      > 
        {dietControl === 'INSIDE' ? 'Continue Assim!' : 'Que pena!'}
      </Title>
      
      {
        dietControl === 'INSIDE' 
          ? <Subtitle>
              Você continua <Text style={{fontWeight: 'bold'}}>dentro da dieta.</Text> Muito bem!
            </Subtitle>
   
          : <Subtitle>
              Você  <Text style={{fontWeight: 'bold'}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
            </Subtitle>
  
      }
      

      <Image
        source={dietControl === 'INSIDE' ? succesImg : failImg}
        style={{marginTop: 40, marginBottom: 32}}
      />

      <Button 
        title="Ir para a página inicial"
        onPress={handleGoToHome}
      />
    </Container>
  )
}