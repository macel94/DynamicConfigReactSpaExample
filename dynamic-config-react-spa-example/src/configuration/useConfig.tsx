import React, { useContext, useState, useCallback } from "react";
import { defaultConfig, DynamicConfig } from "./config";

interface DynamicConfigContext {
    config: DynamicConfig;
    setConfig: (newConfig: DynamicConfig) => void;
}

const configContextObject = React.createContext<DynamicConfigContext>({
    config: defaultConfig,
    setConfig: () => { }
});

export const useConfig = () => useContext(configContextObject);

const ConfigContextProvider: React.FC = ({ children }: any) => {
    const [configState, setConfigState] = useState(defaultConfig);

    const setConfig = useCallback((newConfig: DynamicConfig) => {
        setConfigState(newConfig);
    }, []);

    return (
        <configContextObject.Provider
            value={{
                config: configState,
                setConfig: setConfig
            }}
        >
            {children}
        </configContextObject.Provider>
    );
};

export default ConfigContextProvider;
