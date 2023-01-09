import { MetricsProps } from "@screens/Home"

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
        isSuccessAboveSeventyFive: boolean
        metrics: MetricsProps
      }
      mealDetails: {
        item: MealDetailsProps, 
        date: string
      }
      newMeal: undefined
      mealEdit: {
        data: MealDetailsProps, 
        date: string
      }
      registrationSuccess: {
        mealToRegister: MealToRegisterProps
      }
    }
  }
}