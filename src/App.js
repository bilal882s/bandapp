import './App.scss';
import 'react-pro-sidebar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from './components/Routes/Routing';

function App() {
  return (
    <div className='text-center'>
      <Routing />
    </div>
  );
}

export default App;
