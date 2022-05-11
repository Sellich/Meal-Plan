import React from 'react'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';
import FormText from '../FormText/FormText';
import c from "./CreatableSelect.module.scss"

interface ICreatableSelect {
   name: string;
   values: any;
   register: any;
   error: string;
   label: string;
   multiple: boolean;
   control: any;
}


const CreatableSelectComponent:React.FC<ICreatableSelect> = ({name, values, register, error, label, multiple, control}) => {

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
        render={({field}) => {
           return <CreatableSelect
           {...field}
           isMulti
           options={options}
           className={c.select}
         />
        }}/>
     </div>
     {error && <div className={c.error}> {error} </div>}
   </div>
  )
}

export default CreatableSelectComponent;

