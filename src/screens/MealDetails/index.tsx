import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import { Tag } from "@components/Tag";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar, Text } from "react-native";
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

  const [isModalVisible, setIsModalVisible ] = useState(false)

  function handleCloseModal(){
    setIsModalVisible(false)
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
              onPress={() => navigate('mealEdit', {data: item, date: date})}
              />
            <Button
              title="Excluir Refeição"
              type="SECONDARY"
              icon="Trash"
              onPress={() => setIsModalVisible(true)}
              />
          </ButtonsBox>


        </Content>

        <Modal
          mealToHandle={item} 
          isModalVisible={isModalVisible}
          onClose={handleCloseModal}
          date={date}
        />
      </Container>
  )
}