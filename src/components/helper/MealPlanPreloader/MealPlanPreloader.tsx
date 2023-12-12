import MealPlanPreloaderItem from './MealPlanPreloaderItem/MealPlanPreloaderItem';
import c from "./MealPlanPreloader.module.scss";

const MealPlanPreloader = () => {
  return (
    <div className={c.wrapper}>
      <MealPlanPreloaderItem />
      <MealPlanPreloaderItem />
      <MealPlanPreloaderItem />
    </div>
  )
};

export default MealPlanPreloader;