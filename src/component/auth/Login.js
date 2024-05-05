import React, { useEffect, useState } from 'react'
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../image/logo.png" 
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const Auth = (e) => {
    e.preventDefault();
    dispatch( LoginUser({ email, password }));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, dispatch, navigate]);

  return (
      <div className="container py-5 my-5">
        <div className="columns is-centered">
          <div className="column is-4">
            <form className='box' onSubmit={Auth}>
              {isError && <p className='has-text-centered'>{message}</p>}
              <div class="field has-text-centered">
                <NavLink to={'/'}>
                  <img src={logo} alt="logo-image" width={94} style={{ borderRadius:"50%" }}/>
                </NavLink>
                <h3 className='title has-text-primary me-auto ms-3'>Login</h3>
              </div>                
              <div className="field">
                <label for="email" className='label'>Email</label>
                <input type="email" className='input' placeholder='Masukkan Email' required onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="field">
                <label for="password" className='label'>Password</label>
                <input type="password" className='input' placeholder='*******' required onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="field">
                <button className='button is-success has-text-white is-fullwidth'>
                {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
              <div class="field">
                <p>
                  Belum punya akun? <NavLink to={'/register'}>Daftar</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login
