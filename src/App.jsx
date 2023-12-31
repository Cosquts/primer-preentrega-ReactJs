import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div>
        
        <Navbar />
        <ItemListContainer greeting='saluda app'/>
      </div>
    </>
  );
}

export default App;
