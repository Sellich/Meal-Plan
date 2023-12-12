import NutritionForm from "./NutritionForm/NutritionForm";
import c from "./Nutrition.module.scss";

const Nutrition = () => {
  return (
    <div className={c.form}>
      <NutritionForm />
    </div>
  )
};

export default Nutrition;
