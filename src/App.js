import "./index.css";
import "./styles.css";
import Button from "./componet/button";
import Home from "./componet/home";
import Work from "./componet/work";
import Blog from "./componet/blog";
import About from "./componet/about";

import { useState } from "react";

function App() {
  const [component, setComponent] = useState("home");

  const activeHome = () => setComponent("home");
  const activeWork = () => setComponent("work");
  const activeBlog = () => setComponent("blog");
  const activeAboutUs = () => setComponent("about");

  return (
    <div className="content">
      <div className="content-img">
        {component === "home" && <Home />}
        {component === "work" && <Work />}
        {component === "blog" && <Blog />}
        {component === "about" && <About />}
      </div>
      <nav className="nav-bar">
        <Button text="Home" onClick={activeHome} />
        <Button text="Work" onClick={activeWork} />
        <Button text="Blog" onClick={activeBlog} />
        <Button text="About" onClick={activeAboutUs} />
      </nav>
    </div>
  );
}

export default App;
