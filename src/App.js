import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";

function App() {
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
      <SendMail/>
    </div>  
  );
}

export default App;
