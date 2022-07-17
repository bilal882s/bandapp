import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from './components/Routes/Routing';
import AuthContextProvider from './context/Authcontext';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='text-center'>
      <ToastContainer />
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
}

export default App;
