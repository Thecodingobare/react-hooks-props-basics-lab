import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(props) {
  return (
    <div>
       <NavBar />
      <Home key="5"name={user.name} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
