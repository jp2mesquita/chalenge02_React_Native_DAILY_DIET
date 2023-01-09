import { MealListProps } from "@screens/Home"

export function mealsInsideTheDietPercentage(mealList: MealListProps[]){

  let insideAmount = 0
  let outsideAmount = 0
  let insideStreak = 0
  let biggestInsideStreak = 0
  let lastMealWasInside = false

  mealList.forEach( item => {
    item.data.forEach(meal => {
      if(meal.dietControl === 'INSIDE'){
       insideAmount++
       lastMealWasInside=true
      }else{
        outsideAmount++
        lastMealWasInside=false
      }

      if(lastMealWasInside){
        insideStreak++
        if(insideStreak >= biggestInsideStreak){
          biggestInsideStreak = insideStreak
        }
      }else{
        insideStreak = 0
      }
    }
    )
  })

  const total = insideAmount + outsideAmount
  const insidePercentage = Number(((insideAmount/total)*100).toFixed(2))

  const metrics = {
    insideAmount,
    outsideAmount,
    total,
    insidePercentage,
    biggestInsideStreak
  }
  
  return(metrics)
}
