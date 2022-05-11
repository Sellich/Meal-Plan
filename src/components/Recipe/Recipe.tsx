import React from 'react'
import c from "./Recipe.module.scss"

interface IRecipe {
   ingredients: any
}

const Recipe: React.FC<IRecipe> = ({ingredients}) => {
  return (
    <div className={c.recipe}>
       {ingredients.map((el: any, index: number) => <p key={index}>{el.text}</p>)}
    </div>
  )
}

export default Recipe