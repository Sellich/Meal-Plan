import c from "./Header.module.scss"
import logo from "../../image/logo.png"
import MenuComp from "../Menu/Menu";

const Header = () => {

  return (
    <div className={c.header}>
       <div className={c.image}>
          <img src={logo} alt="logo" className={c.img}/>
       </div>
       <div className={c.logo}>
         CALCULATION
       </div>
       <div className={c.menu}>
         <MenuComp />
       </div>
    </div>
  )
}

export default Header;