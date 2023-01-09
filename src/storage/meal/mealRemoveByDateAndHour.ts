import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeDate } from "@storage/date/removeDate";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMealsByDate } from "./getAllMealsByDate";


export async function mealRemoveByDateAndHour(mealToRemoveHour: string, date : string) {
  try {
    const storageMeals = await getAllMealsByDate(date)

    const filteredMealList = storageMeals.filter(meal => meal.hour !== mealToRemoveHour)
    const mealListWhithoutDeletedOne = JSON.stringify(filteredMealList)

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, mealListWhithoutDeletedOne)

    if(storageMeals.length == 1){
      try{
        await removeDate(date)
      }catch(error){
        throw error
      }
    } 
  } catch (error) {
    throw error
  }
}