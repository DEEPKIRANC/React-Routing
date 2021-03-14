import React from "react";
import "./App.css";
import Nav from "./nav";
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  return (
    <Router> 
      <div class="App">
      
        
        <Nav />
        
        <Route path="/about" component={About} />
          
        
        <Route path="/shop" component={Shop} />    
      
      </div>
    </Router> 
  );
}

export default App;
