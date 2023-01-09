import AsyncStorage from "@react-native-async-storage/async-storage"
import { DATE_COLLECTION } from "@storage/storageConfig"
import { getAllDates } from "./getAllDates"

export async function removeDate(dateToRemove: string){

  try{
    const storageDates = await getAllDates()

    const filterdDates = storageDates.filter(date => date !== dateToRemove)
    const dateListwhithotDeletedOne = JSON.stringify(filterdDates)

    await AsyncStorage.setItem(`${DATE_COLLECTION}`, dateListwhithotDeletedOne)
  } catch(error){
    throw error
  }
}