import React from 'react'
import { Controller } from 'react-hook-form';
import Selected from 'react-select';
import makeAnimated from 'react-select/animated';
import FormText from '../FormText/FormText';
import c from "./MultiSelect.module.scss"

const animatedComponents = makeAnimated();

interface IMultiSelect {
   name: string;
   values: any;
   register: any;
   error: string;
   label: string;
   multiple: boolean;
   control: any;
}


const MultiSelect:React.FC<IMultiSelect> = ({name, values, register, error, label, multiple, control}) => {

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
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            defaultValue={''}
            onBlur={onBlur}
            options={options}
            value={options.filter((option: any) => value?.includes(option.value))}
            onChange={(options: []) =>
               onChange(options?.map((option: any) => option.value))
             }
             className={c.select}
          />
         }}/>
      </div>
      {error && <div className={c.error}> {error} </div>}
    </div>
  )
}

export default MultiSelect;