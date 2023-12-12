import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button/Button';
import { breakfast, lunch, dinner, diet, health, cuisineType } from '../../../data/nutritionData';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getRecipes, setProduct } from '../../../redux/nutritionReducer';
import { selectCalories } from '../../../redux/selectCalculator';
import { useNavigate } from 'react-router-dom';
import MultiSelect from '../../MultiSelect/MultiSelect';
import c from "./NutritionForm.module.scss";
import CreatableSelectComponent from '../../CreatableSelect/CreatableSelect';

export type NutritionFormValues = {
  breakfast: { label: string, value: string }[];
  lunch: { label: string, value: string }[];
  dinner: { label: string, value: string }[];
  diet: string[];
  health: string[];
  cuisineType: string[];
};

const NutritionForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    breakfast: Yup.array().required('Breakfast is required'),
    lunch: Yup.array().required('Lunch is required'),
    dinner: Yup.array().required('Dinner is required'),
    diet: Yup.array().required('Diet is required'),
    health: Yup.array().required('Health is required'),
    cuisineType: Yup.array().required('Cuisine Type is required'),
  })
  const { handleSubmit, formState: { errors }, control } = useForm<NutritionFormValues>({
    resolver: yupResolver(validationSchema)
  });

  const calories = useSelector(selectCalories);
  const onSubmit = (data: NutritionFormValues) => {
    dispatch(setProduct(data));
    dispatch(getRecipes(data, 'Breakfast', calories));
    dispatch(getRecipes(data, 'Lunch', calories));
    dispatch(getRecipes(data, 'Dinner', calories));
    navigate('/mealPlan');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
      <CreatableSelectComponent control={control} name='breakfast' values={breakfast}
        error={errors?.breakfast?.message} label='Завтрак' />
      <CreatableSelectComponent control={control} name='lunch' values={lunch}
        error={errors?.lunch?.message} label='Обед' />
      <CreatableSelectComponent control={control} name='dinner' values={dinner}
        error={errors?.dinner?.message} label='Ужин' />
      <MultiSelect control={control} name='diet' values={diet}
        error={errors?.diet?.message} label='Диета' />
      <MultiSelect control={control} name='health' values={health}
        error={errors?.health?.message} label='Здоровье' />
      <MultiSelect control={control} name='cuisineType' values={cuisineType}
        error={errors?.cuisineType?.message} label='Тип диеты' />
      <div className={c.btn}>
        <Button placeholder='Дальше' />
      </div>
    </form>
  )
};

export default NutritionForm;
