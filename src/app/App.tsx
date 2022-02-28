import { Routes, Route } from "react-router-dom";
import Login from "../views/login";
import Dashboard from "../views/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
