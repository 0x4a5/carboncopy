import React from "react";

import { IconButton, Button } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import InboxIcon from "@material-ui/icons/Inbox";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";

import "./Sidebar.css";
import SidebarSelections from "./SidebarSelections";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="side_compose"
        startIcon={<AddOutlinedIcon fontSize="medium" />}
      >
        Compose
      </Button>
      <SidebarSelections
        Icon={InboxIcon}
        title="Inbox"
        number={18}
        selected={true}
      />
      <SidebarSelections Icon={StarBorderIcon} title="Flagged" number={18} />
      <SidebarSelections Icon={AccessTimeIcon} title="Snoozed" number={18} />
      <SidebarSelections
        Icon={LabelImportantIcon}
        title="Important"
        number={18}
      />
      <SidebarSelections Icon={NearMeIcon} title="Sent" number={18} />
      <SidebarSelections Icon={NoteAddIcon} title="Drafts" number={18} />
      <SidebarSelections Icon={ExpandMoreIcon} title="More" number={18} />

      <div className="sidebar-footer">
        <div className="sidebar-footercons">
          <IconButton>
            <GroupIcon />
          </IconButton>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
