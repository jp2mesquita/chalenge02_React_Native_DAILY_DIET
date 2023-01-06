export function formatTimeToSeconds(time: string){
  const splitTime = time.split(':')

  const hours = Number(splitTime[0])
  const minutes = Number(splitTime[1])

  const timeInSeconds = hours*(60*60) + minutes*(60)

  return timeInSeconds
}

