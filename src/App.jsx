import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Emailverify from "./pages/Emailverify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import Adminadd from "./pages/Adminadd";
import RecruitAdmins from "./pages/RecruitAdmins";
import AdminList from "./pages/AdminList";
import Productdetail from "./pages/Productdetail";
import MyCart from "./pages/MyCart";
import Order from "./pages/Order";
import AdminOrders from "./pages/AdminOrders";
function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<Emailverify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-panel" element={<AdminPanel />}/>
        <Route path="/admin-panel/recruit" element={<RecruitAdmins/>}/>
        <Route path="/admin-panel/list" element={<AdminList/>}/>
        <Route path="/admin-panel/add" element={ <Adminadd/>} />
        <Route path="product/:id" element={<Productdetail/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/place-order" element={<Order/>}/>
        <Route path="admin-panel/order" element={<AdminOrders/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
