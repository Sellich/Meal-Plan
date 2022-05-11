type Calculator = {
   calories: number;
}
interface IState {
   calculator: Calculator
}

export const selectCalories = (state: IState) => {
   return state.calculator.calories
}


export const selectMealPlan = (state: any) => {
   return state.nutrition[0].mealPlan
}

export const selectSucces = (state: any) => {
   return state.nutrition[0].succes
}

export const selectOpenMenu = (state: any) => {
   return state.menu.openMenu
}