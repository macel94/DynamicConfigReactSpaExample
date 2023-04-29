import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from "react";
import { dynamicConfigUrl } from './configuration/config';
import MySuperDuperComplexComponent from './components/MySuperDuperComplexComponent';
import { useConfig } from './configuration/useConfig';

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [configLoadingState, setConfigLoadingState] = useState<"loading" | "ready" | "error">("loading");
  const { setConfig } = useConfig();

  useEffect(() => {
    fetch(dynamicConfigUrl)
      .then(response => response.json())
      .then((deserializedJsonConfig) => {
        setConfig(deserializedJsonConfig);
        console.log("Global config fetched: ", deserializedJsonConfig);
        setConfigLoadingState("ready");
      })
      .catch(e => {
        setConfigLoadingState("error");
      })
  }, [setConfig]);

  if (configLoadingState === "loading") {
    return <p>loading...</p>
  }
  if (configLoadingState === "error") {
    return <p style={{ color: "red", textAlign: "center" }}>Error while fetching global config </p>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MySuperDuperComplexComponent />
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App