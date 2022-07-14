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
      {/* <div className='center w-100' style={{ height: "100vh" }}>
        <h1 className="text-center">Add / View Accounts</h1>
        <div className="container mt-3 text-center">
          <div className="row d-flex m-4">
            <div className="col-12 col-md-6 col-lg-6  ">
              <Card>
                <div class="text-center">
                  <CardContent>
                    <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                    <hr />
                    <Button className='m-1' size="sm" variant={'contained'} color="success">
                      Click Me
                    </Button>
                    <Button className='m-1' size="sm" variant={'contained'} color="warning">Click Me
                    </Button>
                    <hr />
                    <br />
                    <h1>0</h1>
                    <h4>Accounts</h4>
                  </CardContent>
                </div>
              </Card>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <Card className="">
                <div class="text-center">
                  <CardContent>
                    <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Transactions</h5>
                    <hr />
                    <Button className='m-1' size="sm" variant={'contained'} color="success">
                      Click Me
                    </Button>
                    <Button className='m-1' size="sm" variant={'contained'} color="warning">Click Me
                    </Button>
                    <hr />
                    <br />
                    <h1>0</h1>
                    <h4>Transactions</h4>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
