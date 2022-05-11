import React from 'react'
import c from "./Select.module.scss"
import Selected from 'react-select';
import makeAnimated from 'react-select/animated';
import { Controller } from 'react-hook-form';
import FormText from '../FormText/FormText';


const animatedComponents = makeAnimated();
interface ISelect {
   name: string;
   values: any;
   register: any;
   error: string;
   label: string;
   multiple: boolean;
   control: any;
}

const Select: React.FC<ISelect> = ({name, values, error, label, control}) => {


   const options = values.map((el: any) => ({
      label: el.label,
      value: el.value,
    }));

  return (
    <div className={c.wrapper}>
    <div className={c.controller}>
       <FormText label={label}/>
      <Controller 
         name={name} 
         control={control}
         render={({field: {value, onChange, onBlur}}) => {
            return <Selected
            closeMenuOnSelect={true}
            components={animatedComponents}
            defaultValue={''}
            onBlur={onBlur}
            options={options}
            value={options.find((c: any) => c.value === value)}
            onChange={(val: any) => onChange(val.value)}
            className={c.select}
          />
         }}/>
         </div>
         {error && <div className={c.error}> {error} </div>}
    </div>
  )
}

export default Select