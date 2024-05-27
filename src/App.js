import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Outlet from './components';
import Redirect from './components/redirect';
import MainPage from './pages/main-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
