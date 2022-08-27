import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInSide from "./component/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignInSide />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
