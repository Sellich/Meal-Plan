import FormText from "../FormText/FormText";
import c from "./Input.module.scss"
import SecretInput from "./SecretInput/SecretInput";

interface IInput {
   label: string;
   type: string;
   register: any;
   name: string;
   placeholder: string;
   error?: string;
}

const Input:React.FC<IInput> = ({label, type, register, name, placeholder, error }) => {



  return (
    <div className={c.wrapper}>
       {label === 'Age' || 'Weight' ? <SecretInput placeholder={placeholder} label={label} register={register} name={name}/> : 
       <div className={c.wrapper_input}>
         <FormText label={label}/>
         <input type={type}  {...register(name)} id={name} name={name} placeholder={placeholder} className={c.input}/>
      </div> }
      {error && <div  className={c.wrapper_error}>{error}</div>}
    </div>
  )
}

export default Input