import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cap.app',
  appName: 'capacitor-workshop',
  webDir: 'dist/capacitor-workshop',
  server: {
    androidScheme: 'https'
  }
};

export default config;
