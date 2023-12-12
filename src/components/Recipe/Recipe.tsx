import React from 'react';
import c from "./Recipe.module.scss";

export type IIngredient = {
  food: string,
  foodCategory: string,
  foodId: string,
  image: string,
  measure: string,
  quantity: number,
  text: string,
  weight: number,
};
interface IRecipe {
  ingredients: IIngredient[];
};

const Recipe: React.FC<IRecipe> = ({ ingredients }) => {
  return (
    <div className={c.recipe}>
      {ingredients.map((el: IIngredient, index: number) => <p key={index}>{el.text}</p>)}
    </div>
  )
};

export default Recipe;
