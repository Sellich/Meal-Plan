import axios from "axios";


const instance = axios.create({
   baseURL: 'https://api.edamam.com/api/',
   timeout: 10000,
 });

 const api_id = '8aadf344';
 const app_key = 'be71a12ca3da8f17107eb804d46788a7';


export const nutritionAPI = {
   getNutritionByType(product: [], calories: number, type: string, diet: string, health: string, cuisineType: string){
      return instance.get(`recipes/v2?type=public&q=${product.map((el: any) => el.value)}
      &app_id=${api_id}&app_key=${app_key}
      &diet=balanced&health=${health}&cuisineType=American&mealType=Breakfast&calories=570`)
   },

}
