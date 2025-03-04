export interface AppConfig {
    apiUrl: string;
    timeout: number;
    featureFlag: boolean;
  }

export const config: AppConfig = {
    apiUrl: 'http://192.168.3.34:1080', //'http://192.168.20.12:1080',  //'https://localhost:7247',, 
    timeout: 5000, // Timeout in milliseconds
    featureFlag: true,
  };