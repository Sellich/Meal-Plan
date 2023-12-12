import c from "./Header.module.scss";
//import MenuComp from "../Menu/Menu";

const Header = () => {
  return (
    <div className={c.header}>
      <div className={c.image}>
        💪
      </div>
      <div className={c.logo}>
        Фитнес Калькулятор
      </div>
      {/*<div className={c.menu}><MenuComp /></div>*/}
    </div>
  )
};

export default Header;
