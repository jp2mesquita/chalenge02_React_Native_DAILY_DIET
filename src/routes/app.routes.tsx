import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '@screens/Home'
import { MealDetails } from "@screens/MealDetails";
import { NewMeal } from "@screens/NewMeal";
import { RegistrationSuccess } from "@screens/RegistrationSuccess";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Navigator
      screenOptions={{ headerShown: false}}
    >
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="statistics"
        component={Statistics}
      />
      <Screen 
        name="mealDetails"
        component={MealDetails}
      />
      <Screen 
        name="newMeal"
        component={NewMeal}
      />
      <Screen 
        name="registrationSuccess"
        component={RegistrationSuccess}
      />
    </Navigator>
  )
}