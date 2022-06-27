import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Section from "./Section";
import EmailRows from "./EmailRows";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="#0A0A0A" selected />
        <Section Icon={PeopleAltIcon} title="Social" color="#0A0A0A" />
        <Section Icon={LocalOfferIcon} title="Promotional" color="#0A0A0A" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRows
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRows
          title="Original Test Email"
          subject="Test Data"
          description="Test Email"
          time="2200"
        />
      </div>
    </div>
  );
}

export default EmailList;
