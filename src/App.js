import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Header from "./Header";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen );


  return (
    <div className="app">
      <Header />

      <div className='app_body'>
        <Sidebar />
        <Routes>
        <Route path="/mail" element={<Mail />} />
        <Route path="/" element={<EmailList />} />
      </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>  
  );
}

export default App;
