 
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Kanbas from "../Kanbas"
// Importing Lab1 from lab1 file, defaults to index.tsx
  export default function Labs() {
    return (
      <div id="wd-labs">
        <h2>Christopher Alcantara CS5610 20593</h2>
        
        <a id="wd-website-url" href="=https://github.com/MagnusLightwod/kanbas-react-web-app/tree/master">Git Repositoy(Master Branch)</a>
      
        <TOC />
      <Routes>
        {/*Was lab1 but makes more sense for Labs to be homepage*/}
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Kanbas" element ={<Kanbas />} />
      </Routes>
      </div>
  );
}
