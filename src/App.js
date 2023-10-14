import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login';
import Navbar from './components/navbar';
import { SignUp } from './Pages/SignUp';
import ProtectedNavbar from './Routes/ProtectedNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='/SignUp' element={ <SignUp/> } />
          <Route path='/Main' element={
            <ProtectedNavbar>
              <Navbar/>
            </ProtectedNavbar> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
