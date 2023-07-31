import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Outlet from "./components";
import Redirect from "./components/redirect";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
