import { DynamicConfig } from "../configuration/config";

export class BusinessServiceExample {
  constructor(readonly config: DynamicConfig) {}

  public getSomeDataFromApi(): string {
    console.log("service method", this.config);
    return this.config.apiUrl;
  }
}
