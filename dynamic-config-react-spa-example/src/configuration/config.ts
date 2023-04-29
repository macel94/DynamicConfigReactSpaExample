export interface DynamicConfig {
    apiUrl: string;
}

export const defaultConfig: DynamicConfig = {
    apiUrl: "undefinedApiUrl",
};

export const dynamicConfigUrl = "configs/config.json";