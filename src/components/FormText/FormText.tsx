import c from "./FormText.module.scss";

interface IFormText {
  label: string;
};

const FormText: React.FC<IFormText> = ({ label }) => {
  return (
    <label className={c.label}> {label} </label>
  )
};

export default FormText;