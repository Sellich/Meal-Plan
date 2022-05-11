import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { nutritionAPI } from '../API/API';
import { RootState } from './store';


const nutritionState = [
   {products: {},
   succes: {
      breakfast: false,
      lunch: false,
      dinner: false,
   },
   mealPlan: [
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
  {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   {day: {
      breakfast: null,
      lunch: null,
      dinner: null,
   }},
   ]
}
]

const nutritionSlice = createSlice({
   name: 'nutrition',
   initialState: nutritionState,
   reducers: {
      setProduct(state, action) {
         state[0].products = [action.payload.breakfast, 
            action.payload.lunch, action.payload.dinner].join();
      },
      setLunch(state, action) {
         for(let i = 0; i < 7; i++){
            if(state[0].mealPlan[i].day){
               state[0].mealPlan[i].day.lunch = action.payload[i]
               if(i === 7) {
                  state[0].succes.lunch = true
               }
            }
         }
      },
      setDinner(state, action) {
         for(let i = 0; i < 7; i++){
            if(state[0].mealPlan[i].day){
               state[0].mealPlan[i].day.dinner = action.payload[i]
               if(i === 7) {
                  state[0].succes.dinner = true
               }
            }
         }
      },
      setBreakfast(state, action) {
         for(let i = 0; i < 7; i++){
            if(state[0].mealPlan[i].day){
               state[0].mealPlan[i].day.breakfast = action.payload[i]
               if(i === 7) {
                  state[0].succes.breakfast = true
               }
            }
         }
      },

   }
})


export const getRecipes = (data: any, type: string, calories: number,  ): ThunkAction<void, RootState, unknown, AnyAction> => 
         async(dispatch) => {
      
      if(type === 'Breakfast'){
         let response = await nutritionAPI.getNutritionByType(data.breakfast, calories * 0.3, type, data.diet, data.health, data.cuisineType)
         dispatch(setBreakfast(response.data.hits))
      } else if(type === 'Lunch'){
         let response = await nutritionAPI.getNutritionByType(data.lunch, calories *0.35, type, data.diet, data.health, data.cuisineType)
         dispatch(setLunch(response.data.hits))}
         else if(type === 'Dinner') {
            let response = await nutritionAPI.getNutritionByType(data.dinner, calories * 0.2, type, data.diet, data.health, data.cuisineType)
         dispatch(setDinner(response.data.hits))
         }
}

export const {setProduct, setLunch, setDinner, setBreakfast} = nutritionSlice.actions;
export default nutritionSlice.reducer