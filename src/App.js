import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from './components/Routes/Routing';
import Signup from "./pages/signupPage/Signup";
import Login from "../src/pages/signupPage/Login";

function App() {
  return (
    <div className='text-center'>
      <Routing />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
      {/* <Header />
      <LandingPage /> */}
    </div>
  );
}

export default App;
