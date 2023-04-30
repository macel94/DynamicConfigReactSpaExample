import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from "react";
import { dynamicConfigUrl } from './configuration/configConstants';
import MySuperDuperComplexComponent from './components/MySuperDuperComplexComponent';
import { useConfig } from './configuration/useConfig';

const App: React.FC = () => {
  const [configLoadingState, setConfigLoadingState] = useState<"loading" | "ready" | "error">("loading");
  const { config, setConfig } = useConfig();
  const [ configWasFetched, setConfigWasFetched ] = useState<boolean>(false);

  useEffect(() => {
    fetch(dynamicConfigUrl)
      .then(response => response.json())
      .then((deserializedJsonConfig) => {
        setTimeout(() => {
          setConfigWasFetched(true);
          setConfig(deserializedJsonConfig);
          console.log("Global config fetched: ", deserializedJsonConfig);
          setTimeout(() => {
            setConfigLoadingState("ready");
          }, 2000);
        }, 5000);
      })
      .catch(e => {
        console.log("Error while loading the global config: " + e);
        setConfigLoadingState("error");
      })
  }, [setConfig]);

  if (configLoadingState === "loading") {
    return (
      <>
        <h1>Global config is loading...</h1>
        <h2 style={{ color: (configWasFetched ? "green" : "red"), textAlign: "center" }}>Current apiUrl value: {config.apiUrl}</h2>
        <p>the app is delaying the load of the config file to show that even if global context we can manually load and use the dynamic config...</p>
      </>);
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
      <h1>The component under this one will use a service to dynamically load the config from the provider and then update</h1>
      <MySuperDuperComplexComponent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App