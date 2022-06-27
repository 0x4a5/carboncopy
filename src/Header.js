import React from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import carbonImg from "./images/carboncopy.png";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuSharpIcon />
        </IconButton>
        <img src={carbonImg} alt="carbon logo" />
      </div>

      <div className="header_middle">
        <SearchOutlinedIcon />
        <input placeholder="Search email" type="text" />
        <ArrowDropDownOutlinedIcon className="header_inputCaret" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
