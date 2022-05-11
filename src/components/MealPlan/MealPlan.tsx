import { useSelector } from 'react-redux'
import { selectMealPlan } from '../../redux/selectCalculator'
import MealCard from './MealCard/MealCard'
import Slider from "react-slick";
import { useState } from 'react';
import Recipe from '../Recipe/Recipe';
import c from "./MealPlan.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MealPlanPreloader from '../helper/MealPlanPreloader/MealPlanPreloader';

const MealPlan = () => {
   interface IRecipe {
      ingredients: any;
   }
   const [recipe, setRecipe] = useState<IRecipe | null>(null);

   const handleClick = (data: any) => {
      setRecipe(data)
   }

   const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const mealPlan = useSelector(selectMealPlan)
  return (
    <div className={c.wrapper}>
       <Slider {...settings}>
            {
            mealPlan.map((day: any, index: number) => 
            <MealCard
               key={index}
               breakfast={day?.day?.breakfast?.recipe} 
               lunch={day?.day?.lunch?.recipe} 
               dinner={day?.day?.dinner?.recipe}
               handleClick={handleClick}
               />
               )}
       </Slider>
         {recipe && 
         <div className={c.recipe_wrapper} onClick={() => setRecipe(null)}>
            <div className={c.recipe}>
               <Recipe ingredients={recipe?.ingredients} />
            </div>
         </div> }
    </div>
  )
}

export default MealPlan