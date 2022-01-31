import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


const HeaderOption = ({ avatar, Icon, title, click }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={click} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar &&( <Avatar className="headerOption__icon" src={user?.profilePic}>{user?.email[0]}</Avatar>)}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
