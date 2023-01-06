import AsyncStorage from "@react-native-async-storage/async-storage"; 

import { DATE_COLLECTION } from '@storage/storageConfig'
import { getAllDates } from "../date/getAllDates";

export async function registerNewlDate(storedDates: string[], newDate: string){

  try {
    const toStore = JSON.stringify([...storedDates, newDate])

    await AsyncStorage.setItem(DATE_COLLECTION, toStore)
  } catch (error) {
    throw error
  }

}