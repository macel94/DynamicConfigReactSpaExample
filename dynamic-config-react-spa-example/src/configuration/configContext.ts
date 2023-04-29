import React from "react";
import { DynamicConfigContext } from "./DynamicConfigContext";

const configContext = React.createContext<DynamicConfigContext | undefined>(undefined);

export default configContext;