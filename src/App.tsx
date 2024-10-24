import Assignments from "./Kanbas/Courses/Assignments";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";
import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    
    <HashRouter>
      <div>
        <Link to="Labs">Labs</Link>| 
        <Link to="Kanbas">Kanbas</Link>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          {/* route to power 3000 and 3000/#/Labs */}
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          
          
        </Routes>

      </div>
    </HashRouter>
  );
}


