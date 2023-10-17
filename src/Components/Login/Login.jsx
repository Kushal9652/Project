import React, { useState, useEffect } from 'react';
import './Login.css'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };
    const url = isSignUp
      ? 'http://localhost/vydya/vydya/MainFile/backend/signup.php'
      : 'http://localhost/vydya/vydya/MainFile/backend/login.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        // Authentication or signup was successful, handle redirection or other actions
      } else {
        const data = await response.json();
        setError(data.message); // Set the error message from the server
      }
    } catch (error) {
      setError('An error occurred.'); // Handle network or other errors
    }
  };

    useEffect(()=>{
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
  
        signUpButton.addEventListener("click", () => {
          container.classList.add("right-panel-active");
        });
  
        signInButton.addEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
    },[])
  return (
    <div className='body'>
      <div data-aos="fade-right" data-aos-duration="1000"  className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="http://localhost/vydya/vydya/MainFile/backend/signup.php" method="post">
          <h1 className='h1' id="vydya">vydya</h1>

          <input className='input' type="text" placeholder="Name" id="uname"  name="uname"/>
          <input className='input' type="email" placeholder="Email" id="email" name="email" />
          <input className='input' type="password" placeholder="Password" id="pass" name="pass" />
          <button>Sign Up</button>
          <br /><br /><br /><br />

          <div className="social-container">
            <a href="https:www.facebook.com" className="social" id="fb">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https:www.instagram.com" className="social" id="ins">
              <i className="fab fa-instagram"> </i>
            </a>
            <a href="https://www.gmail.com" className="social" id="gm">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.twitter.com" className="social" id="tw">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </form>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="form-container sign-in-container">
        <form action="http://localhost/vydya/vydya/MainFile/backend/login.php" method="post">
          <h1 className='h1'>Login In</h1>

          <input className='input' type="email" placeholder="Email" id="mail" name="email" />
          <input className='input' type="password" placeholder="Password" id="pass" name="pass"/>
          <button>Log In</button>
          <br /><br /><br /><br /><br /><br />

          <div className="social-container">
            <a href="https:www.facebook.com" className="social" id="fb">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https:www.instagram.com" className="social" id="ins">
              <i className="fab fa-instagram"> </i>
            </a>
            <a href="https://www.gmail.com" className="social" id="gm">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.twitter.com" className="social" id="tw">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className='h1'>welcome</h1>
            <p className='p'>
              Wherever the art of Medicine is loved, there is also a love of
              Humanity.
            </p>
            <br />
            <p className='p' style={{color: "rgb(0, 68, 255)"}}>Already have an account?</p>
            <button className="btnpress" id="signIn">Login In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>vydya</h1>
            <p className='p'>Passion for excellence. Compassion for people.</p>
            <br />
            <p className='p' style={{color: "rgb(0, 68, 255)"}}>Don't have an account?</p>
            <button className="btnpress" id="signUp" style={{color:" rgb(57, 49, 5)"}}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}