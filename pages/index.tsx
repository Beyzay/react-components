import React from "react";
import NavBar from "../components/NavBar";
import Toggle from "../components/Toggle";
import Counter from "../components/Counter";
import Contact from "../components/Contact";
import WelcomeHome from "../components/WelcomeHome";

export default function Home() {
  // Initialize Variables for props
  const messageVar = "You have discovered the \"message\" props passed from the parent component to the child component.";
  const titleVar = "Current Count";

  return (
    <div>

      {/* Navigation Menu */}
      <div id="navbar">
        <NavBar />
      </div>
      <br/>

      {/* WelcomeHome Component */}
      <div id="home">
        <WelcomeHome />
      </div>
      <br/>

      {/* Toggle Component */}
      <div id="toggle">
        <Toggle message={messageVar} />
      </div>
      <br/>
      
      {/* Counter Component */}
      <div id="counter">
        <Counter title={titleVar}/>
      </div>
      <br/>

      {/* Contact Component */}
      <div id="contact">
        <Contact />
      </div>
      <br/>

    </div>
  )
}