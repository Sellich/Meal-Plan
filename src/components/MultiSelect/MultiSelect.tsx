import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Selected from 'react-select';
import makeAnimated from 'react-select/animated';
import FormText from '../FormText/FormText';
import c from "./MultiSelect.module.scss";
import { NutritionFormValues } from '../Nutrition/NutritionForm/NutritionForm';

const animatedComponents = makeAnimated();
interface IMultiSelect {
  name: 'diet' | 'health' | 'cuisineType';
  values: { label: string, value?: string }[];
  error: string | undefined;
  label: string;
  control: Control<NutritionFormValues>;
};

const MultiSelect: React.FC<IMultiSelect> = ({ name, values, error, label, control }) => {
  const options = values.map((el: { label: string, value?: string }) => ({
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
          render={({ field: { value, onChange, onBlur } }) => {
            return <Selected
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              defaultValue=''
              onBlur={onBlur}
              options={options}
              value={options.filter((option) => value?.includes(option.value!))}
              onChange={(options) => {
                onChange((options as { label: string, value: string }[])?.map((option) => option.value))
              }
              }
              className={c.select}
              placeholder='Надо сделать выбор!...'
            />
          }} />
      </div>
      {error && <div className={c.error}> {error} </div>}
    </div>
  )
};

export default MultiSelect;