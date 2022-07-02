import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from './components/Routing/Routing';
import Signup from "./pages/signupPage/Signup";
import Login from "../src/pages/signupPage/Login";

function App() {
  return (
    <>
      <Routing />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
      {/* <Header />
      <LandingPage /> */}
    </>
  );
}

export default App;
