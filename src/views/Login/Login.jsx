import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "../../reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Error. Email and password required to login.");
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(`There was an error trying to log in. Error: ${error.message}`);
      });
  };

  const register = () => {
    if (!email || !password || !displayName) {
      console.log("Error. Name, Email and password required to register.");
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
          photoURL,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName,
                photoURL,
              })
            );
          })
          .catch((error) => {
            alert(
              `There was an error setting display name or avatar. Error: ${error.message}`
            );
          });
      })
      .catch((error) => {
        alert(
          `There was an error registering your user. Error: ${error.message}`
        );
      });
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://1000marcas.net/wp-content/uploads/2020/01/Linkedin-logo.jpg"
        alt=""
      />

      <form>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Full name (required)"
        />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Profile pic URL"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (required)"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register-now" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
