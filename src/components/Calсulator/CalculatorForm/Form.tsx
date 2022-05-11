import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { countingCalories } from '../../../functions/countingCalories';
import Select from '../../Select/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { activity, sex } from '../../../data/data';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { setCalories } from '../../../redux/calculatorReducer';
import { useNavigate } from 'react-router-dom';
import c from "./Form.module.scss"

const Form = () => {

   let navigate = useNavigate();
   const dispatch: AppDispatch = useDispatch()
   const validationSchema = Yup.object().shape({
      sex: Yup.string().required('Sex is required'),
      age: Yup.string().required('Age is required'),
      weight: Yup.string().required('Weight is required'),
      height: Yup.string().required('Height is required'),
      activity: Yup.string().required('Activity is required'),

   })
   const {register, handleSubmit, formState: {errors}, control} = useForm({
      resolver: yupResolver(validationSchema)
      
});

   const onSubmit = (data: any) => {
      console.log(data)
      dispatch(setCalories(countingCalories(data)))
      navigate('/nutrition')

   }

  return (
   <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
      <Select control={control} error={errors?.sex?.message} register={register} label="Sex" name="sex" values={sex} multiple={false}/>
      <Input error={errors?.age?.message} register={register} label="Age" name="age" placeholder='Age' type="text"/>
      <Input error={errors?.weight?.message} register={register} label="Weight" name="weight" placeholder='Weight' type="text"/>
      <Input error={errors?.height?.message} register={register} label="Height" name="height" placeholder='Height' type="text"/>
      <Select control={control} error={errors?.activity?.message} register={register} label="Activity" name="activity" 
         values={activity} multiple={false}/>
         <div className={c.btn}>
      <Button placeholder='Next'/>
         </div>
 </form>
  )
}

export default Form;