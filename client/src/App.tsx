import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import SignInSide from "./component/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <SignInSide />
      </Route>
    </BrowserRouter>
  );
}

export default App;
