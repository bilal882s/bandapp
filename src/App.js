import './App.scss';
import Navbar from './components/header/Header';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
