import React from 'react'
import c from "./MealItemRight.module.scss"

interface IMealItemRight {
   title: string,
   protein: number,
   carbs: number,
   fats: number,
   calories: number,
   ingredients: [],
}

const MealItemRight: React.FC<IMealItemRight> = ({title, protein, carbs, fats, calories, ingredients}) => {
  return (
    <div className={c.wrapper}>
       <div className={c.title}>
          {title}
       </div>
       <div className={c.nutrition}>
          <div className={c.protein}>
            Protein: {`${Math.round(protein)} g`}
          </div>
          <div className={c.carbs}>
            Carbs: {`${Math.round(carbs)} g`}
          </div>
          <div className={c.fats}>
            Fats: {`${Math.round(fats)} g`}
          </div>
          <div className={c.calories}>
            Calories: {Math.round(calories)}
          </div>
       </div>
       <div className={c.ingredients}>
            <span className={c.span}>Ingredients:</span> {ingredients?.join(', ')}
       </div>
    </div>
  )
}

export default MealItemRight