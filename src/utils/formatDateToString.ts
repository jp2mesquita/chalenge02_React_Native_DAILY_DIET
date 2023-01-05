import { format } from 'date-fns'

export function formatDateToString(date: Date){
  
  const newDate = format(date, 'dd/MM/yyyy')

  return newDate
}