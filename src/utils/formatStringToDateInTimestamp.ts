import { format } from "date-fns"

export function formatStringToDateInTimestamp(dateToConvert: string){

  const date = new Date(dateToConvert)

  const dateInTimestamp = format(date, 't')

  return Number(dateInTimestamp)
}