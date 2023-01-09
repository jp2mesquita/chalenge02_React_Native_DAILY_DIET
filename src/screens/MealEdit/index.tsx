import { useRef, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DietControlButton } from "@components/DietControlButton";
import { Button } from "@components/Button";


import { formatDateToString } from "@utils/formatDateToString";
import { formatDateTimeToHourInString } from "@utils/formatDateTimeToHourInString";

import { registerNewMeal } from "@storage/meal/registerNewMeal";
import { mealRemoveByDateAndHour } from "@storage/meal/mealRemoveByDateAndHour";

import { BackButton, BackIcon, ButtonBox, Container, Content, DataInput, DescriptionInput, Header, HorizontalBox, HourInput, Label, NameInput, Separator } from "./styles";

interface RouteParams{
  data: {
    name: string,
    description: string,
    hour: string,
    dietControl: 'INSIDE' | 'OUTSIDE'
  },
  date: string
}


export function MealEdit({...rest} : TextInputProps){
  const { navigate } = useNavigation()
  
  const route = useRoute()
  const { data, date } = route.params as RouteParams

  const booleanDietControl = data.dietControl === 'INSIDE'

  const [ isInsideDiet, setIsInsideDiet ] = useState<boolean>(booleanDietControl)
  const [ isOutsideDiet, setIsOutsideDiet ] = useState<boolean>(!booleanDietControl)

  const [ newName, setNewName ] = useState(data.name)
  const [ newDescription, setNewDescription ] = useState(data.description)  
  const [ newDate, setNewDate ] = useState(date)
  const [ newTime, setNewTime ] = useState(data.hour)

  const [ isDatePickerVisible, setIsDatePickerVisible ] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [ dietControl, setDietControl ] = useState<'INSIDE' | 'OUTSIDE'>(data.dietControl)

  const newNameInputRef = useRef<TextInput>(null)
  const newDescriptionInputRef = useRef<TextInput>(null)
  const newDateInputRef = useRef<TextInput>(null)
  const newHourInputRef = useRef<TextInput>(null)

  function handleGoBackToMealDetails(){
    navigate('mealDetails', {item: data, date})
  }

  async function handleRemoveToReplace(){
    await mealRemoveByDateAndHour(data.hour, date)
  }

  async function handleRegisterEditMeal(){
    
    await handleRemoveToReplace()

    const date = newDate
    const data = {
      name: newName,
      description: newDescription,
      hour: newTime,
      dietControl: dietControl
    }

    const mealToRegister = {
      date,
      data,
    }

    await registerNewMeal(date, data)

    navigate('registrationSuccess', { mealToRegister })
  }

  function showDatePicker() {
    setIsDatePickerVisible(true)
  }

  function hideDatePicker() {
    setIsDatePickerVisible(false)
  }

  function handleDateConfirm(date: Date) {
    const dateToAdd = formatDateToString(date)
    setNewDate(dateToAdd)

    hideDatePicker()
  }

  function showTimePicker (){
    setTimePickerVisibility(true)
  }

  function hideTimePicker() {
    setTimePickerVisibility(false);
  };

  function handleTimeConfirm(time: Date){
    const timeToAdd = formatDateTimeToHourInString(time)
    setNewTime(timeToAdd)

    hideTimePicker();
  };

  function handleSetIsInsideDiet(){
    setIsInsideDiet(true) 
    setIsOutsideDiet(false)
    setDietControl('INSIDE')
  }

  function handleSetIsOutsideDiet(){
    setIsOutsideDiet(true)
    setIsInsideDiet(false)
    setDietControl('OUTSIDE')

  }

  return(

    <Container>
        
        <Header>
          <BackButton
            onPress={handleGoBackToMealDetails}
          >
            <BackIcon />
          </BackButton>

          <Text
            style={{fontSize: 18, fontWeight: 'bold'}}
          >
            Editar Refeição
          </Text>
        </Header>

        <Content 
          contentContainerStyle={{paddingBottom: 60}}
          showsVerticalScrollIndicator={false}
        >
          <Label> Nome </Label>
          <NameInput 
            ref={newNameInputRef}
            value={newName}
            onChangeText={setNewName}            
            {...rest}
          />

          <Label> Descrição </Label>
          <DescriptionInput 
            ref={newDescriptionInputRef}
            textAlignVertical='top'
            multiline
            value={newDescription}
            onChangeText={setNewDescription}
            {...rest}
          />
          
          <HorizontalBox>
            <View style={{width: 100, flex: 1}}>
              <Label>Data</Label>
              <DataInput 
                ref={newDateInputRef}
                onFocus={showDatePicker}
                value={newDate}
                onChangeText={showDatePicker}
                {...rest}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <Separator 
              width={24}
            />

            <View style={{width: 100, flex: 1}}>
              <Label>Hora</Label>
              <HourInput
                ref={newHourInputRef}
                onFocus={showTimePicker}
                onChangeText={showTimePicker}
                value={newTime}
                {...rest}
              />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
          </HorizontalBox>

          <Label>Está dentro da dieta?</Label>
          <HorizontalBox>
            <DietControlButton 
              isActive={isInsideDiet}
              onPress={() => handleSetIsInsideDiet()}
              type='INSIDE'
            />

            <Separator 
              width={8}
            />
            
            <DietControlButton 
              isActive={isOutsideDiet}
              onPress={() => handleSetIsOutsideDiet()}
              type='OUTSIDE'
            />
          </HorizontalBox>

          <ButtonBox>
            <Button
              title="Cadastrar refeição"
              onPress={handleRegisterEditMeal}
            />
          </ButtonBox>
        </Content>
    </Container>
  )
}