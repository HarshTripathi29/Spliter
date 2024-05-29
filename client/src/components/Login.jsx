import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import '../App.css';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(" ");

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleButtonClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current?.value;

    try {
      if (!isSignInForm) {
        // Sign up logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        });
        console.log(user);
      } else {
        // Sign in logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
      }
      navigate('/'); // Redirect to home or another page after login
    } catch (error) {
      setErrorMessage(`${error.code} ${error.message}`);
    }
  }

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  return (
    <div className='login'>
      <form 
        onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }}
        className='login-form'
      >
        <h1 className='login-heading'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && 
          (
            <input 
              ref={nameRef}
              type="text" 
              placeholder='Full Name' 
              className='input'
            />
          )
        }
        <input 
          type="text" 
          ref={emailRef}
          placeholder='Email Address' 
          className='input'
        />
        <input 
          ref={passwordRef}
          type="password" 
          placeholder='Password' 
          className='input'
        />
        <p>{errorMessage}</p>
        <button 
          className='button'
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
          className='' 
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix, Sign up now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  )
}

export default Login;
