import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import projectContainer from "./projectContainer";

function App() {
  return (
    <Router>
        <Route path="/" Component={projectContainer} />
    </Router>
  )
}

export default App;
