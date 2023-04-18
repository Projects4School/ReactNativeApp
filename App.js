import * as React from 'react';
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import { expo as expoConfig } from "./app.json";
import { AppRegistry } from 'react-native';

export default function App() {
    return (
        <PaperProvider theme={DefaultTheme}>
            <Main />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(expoConfig.name, () => App);