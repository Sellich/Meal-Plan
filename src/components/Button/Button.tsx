import c from "./Button.module.scss"
import arrow from "../../image/rightArrow.png"

interface IButton{
   placeholder: string;
}

const ButtonComp: React.FC<IButton> = ({placeholder}) => {
  return (
    <button className={c.button} type={'submit'}>
       <div className={c.text}>
         {placeholder}
       </div>
       <div>
         <img src={arrow} alt="arrow" className={c.arrow}/>
       </div>
    </button>
  )
}

export default ButtonComp;