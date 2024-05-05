import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tabledata from "./component/course/Tabledata";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />        
            <Route path='/dashboard' element={ <Dashboard />} />            
            <Route path='/data-course' element={<Tabledata />} />     
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
