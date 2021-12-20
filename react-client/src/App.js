import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Form from "./components/Form/Form"
import LoginForm from "./components/LoginForm/LoginForm";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
<>
<Router>
  <Routes>
  <Route path="/" element = {<Homepage />}></Route>
  <Route path="/register" element = {<Form />}></Route>
  <Route path="/login" element = {<LoginForm />}></Route>
  </Routes>
</Router>
</>
  );
}

export default App;
