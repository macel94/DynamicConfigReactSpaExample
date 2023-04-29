import { useContext } from "react";
import configContext from "./configContext";

export const useConfig = () => {
    const context = useContext(configContext);
    if (!context) {
        throw new Error("useConfig must be used within a ConfigContextProvider");
    }
    return context;
};