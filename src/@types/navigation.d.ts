type MealDetailsProps = {
  name: string,
  description: string,
  hour: string,
  dietControl: 'INSIDE' | 'OUTSIDE'
}

export declare global {
  namespace ReactNavigation {
    interface  RootParamList {
      home: undefined
      statistics: {
        isSuccessAboveFifity: boolean
      }
      mealDetails: {
        item: MealDetailsProps, 
        date: string
      }
      newMeal: undefined
      registrationSuccess: {
        dietControl: 'INSIDE' | 'OUTSIDE'
      }
    }
  }
}