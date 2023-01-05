import { Button } from "@components/Button";
import { Tag } from "@components/Tag";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { BackButton, BackIcon, ButtonsBox, Container, Content, Header, Subtitle, Title } from "./styles";

interface RouteParams{
  item: {
    name: string,
    description: string,
    hour: string,
    dietControl: 'INSIDE' | 'OUTSIDE'
  },
  date: string
}



export function MealDetails(){
  const  {  navigate } = useNavigation()
  const route = useRoute()
  const { item, date } = route.params as RouteParams

  function handleGoBack(){
    navigate('home')
  }

  return(
    <Container
      dietControl={ item.dietControl }
    >
      <Header>
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon />
        </BackButton>

        <Text
          style={{fontSize: 20, fontWeight: "bold"}}
        >
          Refeição
        </Text>
      </Header>

      <Content>
        <Title>
          {item.name}
        </Title>
        <Text>
          {item.description}
        </Text>

        <Subtitle>
          Data e hora
        </Subtitle>
        <Text style={{fontSize: 16}}>
          {date} às {item.hour}
        </Text>

        <Tag 
          status={item.dietControl}
        />

        <ButtonsBox>
          <Button
            style={{marginBottom: 8}} 
            title="Editar Refeição"
            icon="Pencil"
          />
          <Button
            title="Excluir Refeição"
            type="SECONDARY"
            icon="Trash"
          />
        </ButtonsBox>
      </Content>
    </Container>
  )
}