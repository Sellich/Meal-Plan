import menu from "../../image/menu.png"
import avatar from "../../image/avatar.png"
import gear from "../../image/gear.png"
import Menu from '@mui/material/Menu';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import React from "react";
import c from "./Menu.module.scss"

const MenuComp = () => {

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     <div>
     <div onClick={handleClick}>
        <img src={menu} alt="avatar" className={c.menu}/>
     </div>
   <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
      'aria-labelledby': 'basic-button',
   }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
 >
    <MenuList>
      <MenuItem>
          <ListItemText className={c.text}>My profile</ListItemText>
          <ListItemIcon> <img src={avatar} alt="avatar" className={c.img}/></ListItemIcon>
      </MenuItem>
      <MenuItem >
          <ListItemText className={c.text}>Settings</ListItemText>
          <ListItemIcon> <img src={gear} alt="avatar" className={c.img}/></ListItemIcon>
      </MenuItem>
      <MenuItem className={c.logOut}>
         Logout
      </MenuItem>
    </MenuList>
 </Menu>
 </div>
  )
}

export default MenuComp;