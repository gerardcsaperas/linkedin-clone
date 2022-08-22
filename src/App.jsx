import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./reducers/userSlice";
import Login from "./views/Login/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
