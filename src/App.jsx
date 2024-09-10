import  { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className={isLightTheme ? "light-theme" : ""}>
      <div className="app">
        <div className="header">
          <div className="title">
            <h1>TODO</h1>
          </div>
          <div className="mode" onClick={toggleTheme}>
            <img src={isLightTheme ? moon : sun} alt="theme-icon" />
          </div>
        </div>
        <Todo />
        <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
      </div>
    
    </div>
  );
};

export default App;
