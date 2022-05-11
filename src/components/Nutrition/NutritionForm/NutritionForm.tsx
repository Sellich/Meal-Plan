import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button/Button';
import { breakfast, lunch, dinner, diet, health, cuisineType } from '../../../data/nutritionData';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {  getRecipes, setProduct } from '../../../redux/nutritionReducer';
import { selectCalories } from '../../../redux/selectCalculator';
import { useNavigate } from 'react-router-dom';
import MultiSelect from '../../MultiSelect/MultiSelect';
import c from "./NutritionForm.module.scss"
import CreatableSelectComponent from '../../CreatableSelect/CreatableSelect';


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
   const { handleSubmit, formState: {errors}, register, control} = useForm({
      resolver: yupResolver(validationSchema)
      
});
   
   const calories = useSelector(selectCalories)
   const onSubmit = (data: any) => {
         dispatch(setProduct(data))
         dispatch(getRecipes(data, 'Breakfast', calories))
         dispatch(getRecipes(data, 'Lunch', calories))
         dispatch(getRecipes(data, 'Dinner', calories))
         navigate('/mealPlan')
   }

  return (
   <form onSubmit={handleSubmit(onSubmit)} className={c.form}> 
      <CreatableSelectComponent control={control} name={'breakfast'} values={breakfast} register={register} 
         error={errors?.breakfast?.message} label={'Breakfast'} multiple={true} />
      <CreatableSelectComponent control={control} name={'lunch'} values={lunch} register={register} 
         error={errors?.lunch?.message} label={'Lunch'} multiple={true} />
      <CreatableSelectComponent control={control} name={'dinner'} values={dinner} register={register} 
         error={errors?.dinner?.message} label={'Dinner'} multiple={true} />         
      <MultiSelect control={control} name={'diet'} values={diet} register={register} 
         error={errors?.diet?.message} label={'Diet'} multiple={true} />
      <MultiSelect control={control} name={'health'} values={health} register={register} 
         error={errors?.health?.message} label={'Health'} multiple={true} />
      <MultiSelect control={control} name={'cuisineType'} values={cuisineType} register={register} 
         error={errors?.cuisineType?.message} label={'Cuisine Type'} multiple={true}/>
      <div className={c.btn}>
         <Button placeholder='Next'/>
      </div>
</form>
  )
}

export default NutritionForm