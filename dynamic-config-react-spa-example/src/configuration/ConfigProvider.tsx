
import React, { useState, useCallback } from "react";
import { defaultConfig } from "./configConstants";
import { DynamicConfig } from "./DynamicConfig";
import { ConfigContextProviderProps } from "./ConfigContextProviderProps";
import configContext from "./configContext";

const ConfigContextProvider: React.FC<ConfigContextProviderProps> = ({ children }) => {
    const [configState, setConfigState] = useState(defaultConfig);

    const setConfig = useCallback((newConfig: DynamicConfig) => {
        setConfigState(newConfig);
    }, []);

    return (
        <configContext.Provider
            value={{
                config: configState,
                setConfig: setConfig
            }}
        >
            {children}
        </configContext.Provider>
    );
};

export default ConfigContextProvider;