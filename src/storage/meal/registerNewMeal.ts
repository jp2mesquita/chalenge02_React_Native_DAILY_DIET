import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { getAllDates } from "@storage/date/getAllDates";
import { registerNewlDate } from "@storage/date/registerNewDate";

import { DATE_COLLECTION, MEAL_COLLECTION } from '@storage/storageConfig'
import { Alert } from "react-native";
import { getAllMealsByDate } from "./getAllMealsByDate";
import { MealStorageDTO } from "./MealSotorageDTO";

export async function registerNewMeal(newDate: string, newMeal: MealStorageDTO){

  try {
    const storedDates = await getAllDates()


    if(storedDates.includes(newDate)){
      const storedMeals = await getAllMealsByDate(newDate)

      const mealsToStore = JSON.stringify([...storedMeals, newMeal])

      await AsyncStorage.setItem(`${MEAL_COLLECTION}-${newDate}`, mealsToStore)

      return
    }

    await registerNewlDate(storedDates, newDate)

    const storedMeals = await getAllMealsByDate(newDate)

    const mealsToStore = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${newDate}`, mealsToStore)

  } catch (error) {
    throw error
  }

}