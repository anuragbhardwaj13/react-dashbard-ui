import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
