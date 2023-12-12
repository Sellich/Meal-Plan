import React, { useState } from 'react';
import FormText from '../../FormText/FormText';
import c from './SecretInput.module.scss';
import close from '../../../image/closeEye.png';
import open from '../../../image/openEye.png';
import { FormValues } from '../../Calсulator/CalculatorForm/Form';
import { UseFormRegister } from 'react-hook-form';

interface ISecretInput {
  label: string;
  register: UseFormRegister<FormValues>;
  name: 'age' | 'weight' | 'height';
  placeholder: string;
};

const SecretInput: React.FC<ISecretInput> = ({ label, register, name, placeholder }) => {
  const [secretMode, setSecretMode] = useState(false);

  return (
    <div className={c.wrapper}>
      <FormText label={label} />
      <div className={`${c.input_wrapper} ${secretMode ? c.secret : null}`}>
        <input id={name} placeholder={placeholder} {...register(name)} type={secretMode ? 'password' : 'text'} className={`${c.input} ${secretMode ? c.secret : null}`} />
        <img src={secretMode ? open : close} alt="Secret mode" onClick={() => setSecretMode(!secretMode)} className={c.img} />
      </div>
    </div>
  )
};

export default SecretInput;