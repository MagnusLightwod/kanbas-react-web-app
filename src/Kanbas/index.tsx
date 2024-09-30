import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

{/*  issue of bootstrapmin resolved performing npm install --save bootstrap*/}
import "./styles.css";
export default function Kanbas() {
    return (
      <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 col-lg-2 col-xl-1 p-0">
          <KanbasNavigation />
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-lg-10 col-xl-11 pt-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );}
  