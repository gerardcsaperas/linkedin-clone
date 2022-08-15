import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import { useSelector } from "react-redux";
import { selectUser } from "./reducers/userSlice";
import Login from "./views/Login/Login";

function App() {
  const user = useSelector(selectUser);

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
