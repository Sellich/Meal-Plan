import React from 'react';
import { Control, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import FormText from '../FormText/FormText';
import c from "./CreatableSelect.module.scss";
import { NutritionFormValues } from '../Nutrition/NutritionForm/NutritionForm';

export type ValuesType = {
  label: string;
  value: string;
};

interface ICreatableSelect {
  name: 'breakfast' | 'lunch' | 'dinner';
  values: ValuesType[];
  error: string | undefined;
  label: string;
  control: Control<NutritionFormValues>;
};

const CreatableSelectComponent: React.FC<ICreatableSelect> = ({ name, values, error, label, control }) => {
  const options = values.map((el: ValuesType) => ({
    label: el.label,
    value: el.value,
  }));

  return (
    <div className={c.wrapper}>
      <div className={c.controller}>
        <FormText label={label} />
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return <CreatableSelect
              {...field}
              isMulti
              options={options}
              className={c.select}
              placeholder="Сделайте выбор..."
            />
          }} />
      </div>
      {error && <div className={c.error}> {error} </div>}
    </div>
  )
};

export default CreatableSelectComponent;
