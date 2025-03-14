export interface AppConfig {
    apiUrl: string;
    timeout: number;
    featureFlag: boolean;
  }

export const config: AppConfig = {
    apiUrl:  'https://192.168.3.34:1081',  //'https://192.168.20.12:1081',  //'https://localhost:7247',, 
    timeout: 5000, // Timeout in milliseconds
    featureFlag: true,
  };