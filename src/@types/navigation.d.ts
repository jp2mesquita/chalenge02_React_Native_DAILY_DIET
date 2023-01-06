export type MealDetailsProps = {
  name: string,
  description: string,
  hour: string,
  dietControl: 'INSIDE' | 'OUTSIDE'
}

type MealToRegisterProps = {
  date: string,
  data: MealDetailsProps
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
        mealToRegister: MealToRegisterProps
      }
    }
  }
}