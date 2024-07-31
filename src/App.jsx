import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    setApiUrl(import.meta.VITE_API_URL);
  });

  return (
    <>
      <h1>Best tech bro</h1>
      <div className="card">
        <p> api url {apiUrl}</p>
      </div>
    </>
  );
}

export default App;
