import React from "react";
import NavBar from "../components/NavBar";
import Toggle from "../components/Toggle";

export default function Home() {
  // Initialize Variables
  const messageVar = "You have passed this message props from a parent component to a child component prop message.";
  
  return (
    <div>

      {/* Navigation Menu */}
      <NavBar />

      {/* Toggle Component */}
      <Toggle message={messageVar} />

    </div>
  )
}