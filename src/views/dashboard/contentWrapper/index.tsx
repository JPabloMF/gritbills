import { Routes, Route } from "react-router-dom";
import Bills from "../bills";
import Home from "../home";

function ContentWrapper() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/bills" element={<Bills />} />
    </Routes>
  );
};

export default ContentWrapper;
