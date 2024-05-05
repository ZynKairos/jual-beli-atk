import React from 'react'
import "bulma/css/bulma.min.css";
import { NavLink } from 'react-router-dom';
import logo from "../image/logo.png" 

const Register = () => {
  return (
      <div className="container my-5 py-5">
        <div className="columns is-centered">
          <div className="column is-4">
            <form className='box'>
              <div class="field has-text-centered">
                <NavLink to={'/'}>
                  <img src={logo} alt="logo-image" width={94} style={{ borderRadius: "50%" }}/>
                </NavLink>
                <h3 className='title has-text-primary me-auto ms-3'>Register</h3>
              </div>                
              <div class="field">
                <label for="nama" className='label'>Nama Lengkap</label>
                <input type="text" className='input' placeholder='Masukkan Nama' required/>
                {/* input role user */}
                <input hidden></input>
              </div>
              <div className="field">
                <label for="email" className='label'>Email</label>
                <input type="email" className='input' placeholder='Masukkan Email' />
              </div>
              <div className="field">
                <label for="password" className='label'>Password</label>
                <input type="password" id='password' className='input' placeholder='*******' />
              </div>
              <div className="field">
                <label for="confPassword" className='label'>Confirm Password</label>
                <input type="confPassword" id='confPassword' className='input' placeholder='*******' />
              </div>
              <div className="field">
                <button className='button is-success has-text-white is-fullwidth'>Register</button>
              </div>
              <div class="field">
                <p>
                  Sudah punya akun? <NavLink to={'/login'}>Login</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Register;
