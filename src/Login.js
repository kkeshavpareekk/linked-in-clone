import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("please enter full name to register");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              userName: userAuth.user.displayName,
              profilePic: userAuth.user.photoURL
            })
          );
        });
      })
      .catch((err) => alert(err.message));
  };
  const LoginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            userName: userAuth.user.displayName,
            profilePic: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <img
        src="http://www.mahesh-europe.com/wp-content/uploads/2020/07/Linkedin-Logo-2011%E2%80%932019.png"
        alt="logo"
      />

      <form onSubmit={LoginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit">Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
