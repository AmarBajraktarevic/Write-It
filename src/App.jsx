import React, { useState } from 'react';
import Logo from './images/logo.png';
import placeholder from './images/pfp-placeholder.jpeg';
import './App.css';

function LoginOverlay({ onClose }) {
  return <div className="login-overlay" onClick={onClose} />;
}

function LoginBox({ onClose }) {
  return (
    <>
      <div className='overlay'></div>
      <div className="login-box">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <h2 className="title">Login</h2>
        <p className="titlebio">Login with your email here</p>
        <form>
          <label htmlFor="email" className='email'>Email</label>
          <input  placeholder='Email / Username' type="email" id="email" name="email" className='email' required />
          <label htmlFor="password" className='password'>Password</label>
          <input  placeholder='Password' type="password" id="password" name="password" className='password' required />
          <button className='submit' type="submit">Login</button>
          <p1 className='tos' > By continuing, you agree to our Terms and Services.</p1>
          <p1 className='tos1' > Read our Privacy Policy.  </p1>
          <div className='divline'></div>
          <p1 className='already'>Don't Have an Account?</p1>
          <a  href='/' className='already-signup' > Sign Up </a>
        </form>
      </div>
    </>
  );
}


function SignUpBox({ onClose }) {
  return (
    <>
    <div className='overlay'> </div>
    <div className="signup-box">
      <button className="close-button" onClick={onClose}>
        x
      </button>

      <h2 className="title">Sign Up</h2>
      <p className="titlebio">Create an account to get started</p>
    
    
    
      <form>
        {/* Add your sign-up form fields here */}
        <button className='submit' type="submit">Sign Up</button>
        <label htmlFor="email" className='email'>Email</label>
        <input  placeholder='Email / Username' type="email" id="email" name="email" className='email' required />

        <label htmlFor="password" className='password'>Password</label>
        <input  placeholder='Password' type="password" id="password" name="password" className='password' required />

        <p1 className='tos' > By signing up, you agree to our Terms and Services.</p1>
        <p1 className='tos1' > Read our Privacy Policy.  </p1>
        <div className='divline'></div>
        <p1 className='already'>Already Have an Account?</p1>
        <a  href='/' className='already-signup' > Login in </a>
    
    
      </form>
   
   
   
   
    </div>
     </>
  );
}

function App() {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showSignUpBox, setShowSignUpBox] = useState(false);

  function handleLoginClick() {
    setShowLoginBox(true);
  }

  function handleSignUpClick() {
    setShowSignUpBox(true);
  }

  function handleLoginBoxClose() {
    setShowLoginBox(false);
  }

  function handleSignUpBoxClose() {
    setShowSignUpBox(false);
  }

  return (
    <div>
      <button className="login" onClick={handleLoginClick}>
        Login
      </button>

      {showLoginBox && (
        <>
          <LoginOverlay onClose={handleLoginBoxClose} />
          <LoginBox onClose={handleLoginBoxClose} />
        </>
      )}

      <button className="signup" onClick={handleSignUpClick}>
        Sign Up
      </button>

      {showSignUpBox && (
        <>
          <LoginOverlay onClose={handleSignUpBoxClose} />
          <SignUpBox onClose={handleSignUpBoxClose} />
        </>
      )}

      <div className="head">
        <h1 className="header">Your Dynamic Interactive Planner App</h1>
        <p className="desc">for seamless organization and productivity</p>
        <a href="#">
          <p className="started">Get Started</p>
        </a>
      </div>

      <nav className="navbar"></nav>

     

      <a href="/">
        <img src={placeholder} alt="" className="profile" />
      </a>

      <a href="/">
        <button className="create">Create</button>
      </a>

      <a href="">
        <img src={Logo} alt="" className="logo" />
      </a>
    </div>
  );
}

export default App;
