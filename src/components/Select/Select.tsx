import React from 'react';
import c from "./Select.module.scss";
import Selected from 'react-select';
import makeAnimated from 'react-select/animated';
import { Control, Controller } from 'react-hook-form';
import FormText from '../FormText/FormText';
import { FormValues } from '../Calсulator/CalculatorForm/Form';

const animatedComponents = makeAnimated();

interface ISelect {
  name: 'sex' | 'activity';
  values: ValuesType[];
  error: string | undefined;
  label: string;
  control: Control<FormValues>;
  placeholder: string;
};

export type ValuesType = {
  label: string;
  value: number;
};

const Select: React.FC<ISelect> = ({ name, values, error, label, control, placeholder }) => {
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
          render={({ field: { value, onChange, onBlur } }) => {
            return <Selected
              closeMenuOnSelect={true}
              components={animatedComponents}
              defaultValue=''
              onBlur={onBlur}
              options={options}
              value={options.find((c: ValuesType) => c.value === value)}
              onChange={(val) => onChange((val as ValuesType).value)}
              className={c.select}
              placeholder={placeholder}
            />
          }} />
      </div>
      {error && <div className={c.error}> {error} </div>}
    </div>
  )
};

export default Select;
