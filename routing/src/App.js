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
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />
            
          
          <Route path="/shop" exact component={Shop} />    
        </Switch>
      </div>
    </Router> 
  );
}

const Home=()=>(
  
    <div>
      <h3>Home Page</h3>
    </div>
    
  
)

export default App;
