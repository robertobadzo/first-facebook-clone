import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Form from "./components/Form/Form"

function App() {
  return (
<>
<Router>
  <Routes>
  <Route path="/register" element = {<Form />}></Route>
  </Routes>
</Router>
</>
  );
}

export default App;
