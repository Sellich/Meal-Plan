import React from 'react'
import ImgPreloader from '../../../helper/MealPlanPreloader/ImgPreloader/ImgPreloader';
import c from "./MealItem.module.scss"
import MealItemRight from './MealItemRight/MealItemRight';

interface IMealItem {
   title: any;
   img: any;
   onClick: (data: any) => void;
   meal: any;
   day: string;
}

const MealItem:React.FC<IMealItem> = ({title, img, onClick, meal, day}) => {
  return (
    <div onDoubleClick={() => onClick(meal)} className={c.wrapper}>
       <div className={c.header}>
          {day}
       </div>
       <div className={c.left}>
          <img src={img} alt="Food" className={c.img}/>
       </div>
       <div className={c.right}>
         <MealItemRight title={title} 
         calories={(meal?.calories / meal?.totalWeight) * 100} 
         protein={(meal?.totalNutrients.PROCNT.quantity / meal?.totalWeight) * 100}
         carbs={(meal?.totalNutrients.CHOCDF.quantity / meal?.totalWeight) * 100} 
         fats={(meal?.totalNutrients.FAT.quantity / meal?.totalWeight) * 100}
         ingredients={meal?.ingredientLines}/>
       </div>
    </div>
  )
}

export default MealItem