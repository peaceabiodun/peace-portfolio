import About from './about';
import NavBar from './NavBar';
import Contact from './contact';
import MainPage from './mainPage';
import Work from './work';

const Outlet = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Outlet;
