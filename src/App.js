import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
