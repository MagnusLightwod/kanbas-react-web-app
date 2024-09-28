import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <div>
        <h1>Kanbas</h1>
        
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">

        <Routes>
          {/* Adjusted so dashboard is the default */}
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Account/*" element={<Account />} />
        
        <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
        </div>
        </div>
      </div>
  );}
  