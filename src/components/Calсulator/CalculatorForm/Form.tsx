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
import c from "./Form.module.scss";

export type FormValues = {
  sex: number;
  age: number;
  weight: number;
  height: number;
  activity: number;
};

const Form = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    sex: Yup.number().required('Sex is required'),
    age: Yup.number().required('Age is required'),
    weight: Yup.number().required('Weight is required'),
    height: Yup.number().required('Height is required'),
    activity: Yup.number().required('Activity is required'),
  });
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    dispatch(setCalories(countingCalories(data)));
    navigate('/nutrition');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
      <Select control={control} error={errors?.sex?.message} label="Пол" name="sex" values={sex} placeholder='Выберите ваш пол...' />
      <Input error={errors?.age?.message} register={register} label="Возраст" name="age" placeholder='Выберите возраст...' type="text" />
      <Input error={errors?.weight?.message} register={register} label="Вес" name="weight" placeholder='Выберите вес...' type="text" />
      <Input error={errors?.height?.message} register={register} label="Рост" name="height" placeholder='Выберите рост...' type="text" />
      <Select control={control} error={errors?.activity?.message} label="Активность" name="activity"
        values={activity} placeholder='Выберите вашу активность...' />
      <div className={c.btn}>
        <Button placeholder='Дальше' />
      </div>
    </form>
  )
};

export default Form;
