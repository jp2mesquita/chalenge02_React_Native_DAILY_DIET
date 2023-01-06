import { format } from 'date-fns'

export function formatDateTimeToHourInString(time: Date){
  
  const newTime = format(time, "kk':'mm")

  return newTime
}