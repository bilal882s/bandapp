import React from "react"
import './App.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from './components/Routes/Routing';
import AuthContextProvider from './context/Authcontext';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="text-center">
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
