import React from "react";
import NavBar from "../components/NavBar";
import Toggle from "../components/Toggle";
import Counter from "../components/Counter";
import Contact from "../components/Contact";

export default function Home() {
  // Initialize Variables for props
  const messageVar = "You have discovered the \"message\" props passed from the parent component to the child component.";
  const titleVar = "Current Count";

  return (
    <div>

      {/* Navigation Menu */}
      <NavBar />
      <br/>

      {/* Toggle Component */}
      <Toggle message={messageVar} />
      <br/>
      
      {/* Counter Component */}
      <Counter title={titleVar}/>
      <br/>

      {/* Contact Component */}
      <div id="contact">
        <Contact />
      </div>
      <br/>

    </div>
  )
}