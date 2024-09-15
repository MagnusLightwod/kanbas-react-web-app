 
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kanbas from "../Kanbas"
// Importing Lab1 from lab1 file, defaults to index.tsx
  export default function Labs() {
    return (
      <div id="wd-labs">
        <h2>Christopher Alcantara</h2>
        <h1>Labs</h1>
      
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
