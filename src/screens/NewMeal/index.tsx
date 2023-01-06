import { Button } from "@components/Button";
import { DietControlButton } from "@components/DietControlButton";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { BackButton, BackIcon, ButtonBox, Container, Content, DataInput, DescriptionInput, Header, HorizontalBox, HourInput, Label, NameInput, Separator } from "./styles";

import DateTimePickerModal from "react-native-modal-datetime-picker";


import { formatDateToString } from "@utils/formatDateToString";


import { MealListProps } from "@screens/Home";

import { registerNewMeal } from "@storage/meal/registerNewMeal";
import { formatDateTimeToHourInString } from "@utils/formatDateTimeToHourInString";

export function NewMeal({...rest} : TextInputProps){
  const { navigate } = useNavigation()
  
  const [ isInsideDiet, setIsInsideDiet ] = useState<boolean>(false)
  const [ isOutsideDiet, setIsOutsideDiet ] = useState<boolean>(false)

  const [ newName, setNewName ] = useState('')
  const [ newDescription, setNewDescription ] = useState('')  
  const [ newDate, setNewDate ] = useState('')
  const [ newTime, setNewTime ] = useState('')

  const [ isDatePickerVisible, setIsDatePickerVisible ] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [ dietControl, setDietControl ] = useState<'INSIDE' | 'OUTSIDE'>('INSIDE')

  const newNameInputRef = useRef<TextInput>(null)
  const newDescriptionInputRef = useRef<TextInput>(null)
  const newDateInputRef = useRef<TextInput>(null)
  const newHourInputRef = useRef<TextInput>(null)

  function handleGoBackToHome(){
    navigate('home')
  }

  function handleRegisterNewMeal(){
    
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

    registerNewMeal(date, data)

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
            onPress={handleGoBackToHome}
          >
            <BackIcon />
          </BackButton>

          <Text
            style={{fontSize: 18, fontWeight: 'bold'}}
          >
            Nova Refeição
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
              onPress={handleRegisterNewMeal}
            />
          </ButtonBox>
        </Content>
    </Container>
  )
}