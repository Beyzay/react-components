import React from "react";
import NavBar from "../components/NavBar";
import Toggle from "../components/Toggle";
import Counter from "../components/Counter";

export default function Home() {
  // Initialize Variables for props
  const messageVar = "You have passed this message props from a parent component to a child component prop message.";
  const titleVar = "Current Count";

  return (
    <div>

      {/* Navigation Menu */}
      <NavBar />

      {/* Toggle Component */}
      <Toggle message={messageVar} />
      <br/>
      
      {/* Counter Component */}
      <Counter title={titleVar}/>
      <br/>

    </div>
  )
}