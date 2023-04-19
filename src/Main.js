import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3DarkTheme as DefaultTheme, adaptNavigationTheme } from 'react-native-paper';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import SaveFileScreen from './screens/Home/SaveFile';
import CameraScreen from './screens/Home/Camera';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#29981b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{ title: 'Home Page' }}
            />
            <Stack.Screen name="SaveFile" component={SaveFileScreen}
                options={{ title: 'Save File' }}
            />
            <Stack.Screen name="Camera" component={CameraScreen}
                options={{ title: 'Camera' }}
            />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator initialRouteName="Settings"
            screenOptions={{
                headerStyle: { backgroundColor: '#29981b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen name="Settings" component={SettingsScreen}
                options={{ title: 'Settings Page' }}
            />
        </Stack.Navigator>
    );
}

export default function Main() {
    return (
        <>
            <StatusBar animated={true} style="inverted" translucent={true} />
            <NavigationContainer theme={DarkTheme}>
                <Tab.Navigator initialRouteName="Feed" screenOptions={{
                    tabBarActiveTintColor: '#29981b',
                }}>
                    <Tab.Screen name="HomeStack" component={HomeStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen name="SettingsStack" component={SettingsStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="cog" color={color} size={size} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}