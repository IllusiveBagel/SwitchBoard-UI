import { useState, useEffect } from "react";
import { Switch } from "./interfaces/Switch";

const baseURL = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [switches, setSwitches] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/switches`)
      .then((response) => response.json())
      .then((json) => setSwitches(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>SwitchBoard</h1>
      {switches.map((s: Switch) => {
        return (
          <li>{s.name}</li>
        );
      })}
    </>
  );
};

export default App;
