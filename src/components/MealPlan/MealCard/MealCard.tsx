import React from 'react';
import MealItem from './MealItem/MealItem';
import c from "./MealCard.module.scss"
import MealPlanPreloader from '../../helper/MealPlanPreloader/MealPlanPreloader';

interface IMealCard {
  // приходят большие объекты с API пока без типов
  breakfast: any;
  lunch: any;
  dinner: any;
  handleClick: (data: any) => void;
}

const MealCard: React.FC<IMealCard> = ({ breakfast, lunch, dinner, handleClick }) => {
  return (
    <div className={c.container}>
      {breakfast?.image ?
        <div>
          <MealItem day='Breakfast' meal={breakfast} title={breakfast?.label || 'TITLE'} img={breakfast?.image || 'TITLE'} onClick={handleClick} />
          <MealItem day='Lunch' meal={lunch} title={lunch?.label || 'TITLE'} img={lunch?.image || 'TITLE'} onClick={handleClick} />
          <MealItem day='Dinner' meal={dinner} title={dinner?.label || 'TITLE'} img={dinner?.image || 'TITLE'} onClick={handleClick} />
        </div> : <MealPlanPreloader />
      }
    </div>
  )
};

export default MealCard;
