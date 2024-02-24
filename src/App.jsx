import React, { useState } from 'react';
import Logo from './images/logo.png';
import placeholder from './images/pfp-placeholder.jpeg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Panel from './components/panel.jsx'; 
import Calendar from './components/calendar.jsx'

function LoginOverlay({ onClose }) {
  
  
  
  
  return <div className="login-overlay" onClick={onClose} />;
}

function LoginBox({ onClose }) {
  return (
    <>
      <div className='overlay'></div>
      <div className="login-box">
        <button className="close-button" onClick={onClose}>x</button>
        <h2 className="title">Login</h2>
        <p className="titlebio">Login with your email here</p>
        <form>
          <label htmlFor="email" className='email'>Email</label>
          <input placeholder='Email / Username' type="email" id="email" name="email" className='email' required />
          <label htmlFor="password" className='password'>Password</label>
          <input placeholder='Password' type="password" id="password" name="password" className='password' required />
          <button className='submit' type="submit">Login</button>
          <p className='tos'> By continuing, you agree to our Terms and Services.</p>
          <p className='tos1'> Read our Privacy Policy. </p>
          <div className='divline'></div>
          <p className='already'>Don't Have an Account?</p>
          <a href='/' className='already-signup'> Sign Up </a>
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
        <button className="close-button" onClick={onClose}>x</button>
        <h2 className="title">Sign Up</h2>
        <p className="titlebio">Create an account to get started</p>
        <form>
          <button className='submit' type="submit">Sign Up</button>
          <label htmlFor="email" className='email'>Email</label>
          <input placeholder='Email / Username' type="email" id="email" name="email" className='email' required />
          <label htmlFor="password" className='password'>Password</label>
          <input placeholder='Password' type="password" id="password" name="password" className='password' required />
          <p className='tos'> By signing up, you agree to our Terms and Services.</p>
          <p className='tos1'> Read our Privacy Policy. </p>
          <div className='divline'></div>
          <p className='already'>Already Have an Account?</p>
          <a href='/' className='already-login'> Login in </a>
        </form>
      </div>
    </>
  );
}

function CreateBox({ onClose }) {
  return (
    <>
      <div className='overlay'></div>
      <div className="create-box">
        <button className="close-button" onClick={onClose}>x</button>
        <h2 className="title">Create</h2>
        <p className="titlebio">Create your plan.</p>
        <form>
        <input  placeholder='Plan Title' className='email'id="title" title="Enter Plan Title" required>
        </input>
        <input  placeholder='Plan Description' className='plan-description'id="title" title="Enter Plan Title" required>
        </input>
        <button className='submit' type="submit">Create Plan</button>
        </form>
      </div>
    </>
  );
}

function App() {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  const [showCreateBox, setShowCreateBox] = useState(false);

  function handleLoginClick() {
    setShowLoginBox(true);
  }

  function handleSignUpClick() {
    setShowSignUpBox(true);
  }

  function handleCreateClick() {
    setShowCreateBox(true);
  }

  function handleClose() {
    setShowLoginBox(false);
    setShowSignUpBox(false);
    setShowCreateBox(false);
  }

  return (
    <Router>
      <div>
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/panel" element={<Panel />} /> {/* Use element prop */}
          <Route path="/calendar" element={<Calendar />} /> {/* Use element prop */}
         
          <Route path="/" element={<MainContent 
           
           showLoginBox={showLoginBox}
            showSignUpBox={showSignUpBox}
            showCreateBox={showCreateBox}
            handleLoginClick={handleLoginClick}
            handleSignUpClick={handleSignUpClick}
            handleCreateClick={handleCreateClick}
            handleClose={handleClose}
          />} /> {/* Use element prop */}
        </Routes> {/* Close Routes */}
      </div>
    </Router>
  );
}

function MainContent({ showLoginBox, showSignUpBox, showCreateBox, handleLoginClick, handleSignUpClick, handleCreateClick, handleClose }) {
  return (
    <div>
      <button className="login" onClick={handleLoginClick}>Login</button>
      <button className="signup" onClick={handleSignUpClick}>Sign Up</button>
      <button className="create" onClick={handleCreateClick}>Create</button>

      <LoginOverlay onClose={handleClose} />

      {showLoginBox && <LoginBox onClose={handleClose} />}
      {showSignUpBox && <SignUpBox onClose={handleClose} />}
      {showCreateBox && <CreateBox onClose={handleClose} />}

      <div className="head">
        <h1 className="header">Your Dynamic Interactive Planner App</h1>
        <p className="desc">for seamless organization and productivity</p>
        <a href="#"><p className="started">Get Started</p></a>
      </div>

      <nav className="navbar"></nav>

      <a href="/panel"><img src={placeholder} alt="" className="profile" /></a>
      <a href=""><img src={Logo} alt="" className="logo" /></a>
    </div>
  );
}

export default App;