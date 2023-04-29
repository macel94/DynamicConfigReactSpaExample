import { DynamicConfig } from "./DynamicConfig";

export interface DynamicConfigContext {
    config: DynamicConfig;
    setConfig: (newConfig: DynamicConfig) => void;
}
