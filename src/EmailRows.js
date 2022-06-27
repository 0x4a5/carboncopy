import React from "react";
import "./EmailRows.css";
import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useNavigate } from 'react-router-dom';



function EmailRows({ id, title, subject, description, time }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/mail")} className="emailRows">
      <div className="emailRows_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRows_title">{title}</h3>

      <div className="emailRows_message">
        <h4>
          {subject} {" "}
           <span className="emailRows_description">-{description}</span>
        </h4>
      </div>

      <p className="emailRows_time">{time}</p>
    </div>
  );
}

export default EmailRows;
