export interface AppConfig {
    apiUrl: string;
    timeout: number;
    featureFlag: boolean;
  }

export const config: AppConfig = {
    apiUrl:  'https://localhost:7247', //'https://192.168.3.34:1081',  //'https://192.168.20.12:1081',  , 
    timeout: 5000, // Timeout in milliseconds
    featureFlag: true,
  };