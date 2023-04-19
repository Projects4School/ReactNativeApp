import 'react-native-gesture-handler';
import * as React from 'react';
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import { expo as expoConfig } from "./app.json";
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    return (
        <PaperProvider theme={DefaultTheme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Main />
            </GestureHandlerRootView>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(expoConfig.name, () => App);