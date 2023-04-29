import React, { useEffect, useMemo, useState } from "react";
import { BusinessServiceExample } from "../service/BusinessServiceExample";
import { useConfig } from "../configuration/useConfig";

const MySuperDuperComplexComponent: React.FC = () => {
    const { config } = useConfig();
    const service = useMemo(() => new BusinessServiceExample(config), [config]);
    const [apiUrl, setApiUrl] = useState("not set")

    useEffect(() => {
        setApiUrl(service.getSomeDataFromApi());
    }, [service]);

    return (
        <p>ApiUrl: {apiUrl}</p>
    );
};

export default MySuperDuperComplexComponent;