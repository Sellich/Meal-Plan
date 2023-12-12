import { useSelector } from 'react-redux';
import { selectMealPlan } from '../../redux/selectCalculator';
import MealCard from './MealCard/MealCard';
import Slider from 'react-slick';
import { useState } from 'react';
import Recipe, { IIngredient } from '../Recipe/Recipe';
import c from './MealPlan.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IRecipe {
  ingredients: IIngredient[];
};

const MealPlan = () => {
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  // приходит огромный объект с API не вижу смысла писать под него Type
  const handleClick = (data: any) => {
    setRecipe(data);
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mealPlan = useSelector(selectMealPlan);

  return (
    <div className={c.wrapper}>
      <Slider {...settings}>
        {
          mealPlan.map((day: { day: { breakfast: any, dinner: any, lunch: any } }, index: number) =>
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
        </div>}
    </div>
  )
};

export default MealPlan;
