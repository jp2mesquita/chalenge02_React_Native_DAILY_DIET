import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION, MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealSotorageDTO";

export async function getAllMealsByDate(date: string){
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals
  } catch (error) {
    throw error
  }
}