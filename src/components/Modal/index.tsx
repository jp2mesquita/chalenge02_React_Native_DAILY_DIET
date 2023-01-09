import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { mealRemoveByDateAndHour } from "@storage/meal/mealRemoveByDateAndHour";
import { MealStorageDTO } from "@storage/meal/MealSotorageDTO";
import { ButtonsBox, Content, ContentContainer, ModalContainer, Separator, Title } from "./styles";

interface ModalProps{
  isModalVisible: boolean
  mealToHandle: MealStorageDTO
  date: string
  onClose: () => void
}

export function Modal({ isModalVisible = false, date, onClose, mealToHandle }: ModalProps){

  const { navigate } = useNavigation()

  const mealToRemoveHour = mealToHandle.hour

  async function handleRemoveMealByDateAndHour(){
    try {
      await mealRemoveByDateAndHour(mealToRemoveHour, date)
    } catch (error) {
      throw error
    }finally{
      navigate('home' )
    }
  }
  return(

    <ModalContainer
      animationType="slide"
      visible={isModalVisible}
      transparent={true}
      onRequestClose={() => onClose()}

    >
      <ContentContainer>
        <Content
          style={{
            elevation: 20,
          }}
        >
          <Title>
            Deseja realmente excluir o registro da refeição?
          </Title>

          <ButtonsBox>
            <Button 
              style={{flex: 1}}
              title="Cancelar"
              type="SECONDARY"
              onPress={onClose}
            />
            <Separator />
            <Button
              style={{flex: 1}} 
              title="Sim, Excluir"
              onPress={handleRemoveMealByDateAndHour}
            />
          </ButtonsBox>
        </Content>
      </ContentContainer>

    </ModalContainer>

  )
}