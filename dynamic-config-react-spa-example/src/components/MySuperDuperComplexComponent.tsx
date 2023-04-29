import React, { useEffect, useMemo, useState } from "react";
import { BusinessServiceExample } from "../service/BusinessServiceExample";
import { useConfig } from "../configuration/useConfig";

const MySuperDuperComplexComponent: React.FC = () => {
    const { config } = useConfig();
    const service = useMemo(() => new BusinessServiceExample(config), [config]);
    const [apiUrl, setApiUrl] = useState("not set")
    const [color, setColor] = useState("red");

    useEffect(() => {
        setTimeout(() => {
            setApiUrl(service.getSomeDataFromApi());
            setColor("green");
        }, 1000);
    }, [service]);

    return (
        <h2 style={{ color }}>ApiUrl: {apiUrl}</h2>
    );
};

export default MySuperDuperComplexComponent;