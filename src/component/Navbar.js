import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'; 
// import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { reset } from './features/authSlice'

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

//   const LogOut = () => {
//     dispatch(LogOut());
//     dispatch(reset());
//     navigate("/login");
//   }

  return (
    <div>
      <Navbar {...args} expand="md" className='bg-light' container='md' >
        <NavbarBrand href="/" className='text-primary text-bold'>NEGOZIO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>            
              <NavLink to={'/dashboard'} style={{ textDecoration:'none' }} className='text-dark'>Dashboard</NavLink>                                  
          </Nav>
          {/* {
            user ? (
                <button onClick={LogOut} className='button is-light'>
                    Log Out
                </button>
            ) : (
                <NavLink to={'/login'}>
                    <button className='button is-light'>Login</button>
                </NavLink>
            )
          } */}

                <NavLink to={'/login'}>
                    <Button color='dark' outline >Login</Button>
                </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;