import { format } from 'date-fns'

export function formatTimeToString(time: Date){
  
  const newTime = format(time, "kk':'mm")

  return newTime
}