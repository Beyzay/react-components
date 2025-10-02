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
      <NavBar />

      <main style={{ padding: "1.5rem" }}>
        {/* WelcomeHome Component */}
        <div id="home" style={{ marginBottom: "3rem", scrollMarginTop: "5rem" }}>
          <WelcomeHome />
        </div>

        {/* Toggle Component */}
        <div id="toggle" style={{ marginBottom: "3rem", scrollMarginTop: "5rem" }}>
          <Toggle message={messageVar} />
        </div>
        
        {/* Counter Component */}
        <div id="counter" style={{ marginBottom: "3rem", scrollMarginTop: "5rem"  }}>
          <Counter title={titleVar}/>
        </div>

        {/* Contact Component */}
        <div id="contact" style={{ marginBottom: "3rem", scrollMarginTop: "5rem"  }}>
          <Contact />
        </div>
      </main>

    </div>
  )
}