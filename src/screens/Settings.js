import { Alert, SafeAreaView, View } from "react-native";
import { Button, Headline, Text } from "react-native-paper";
import { ListButton } from "../components/Buttons";

export default function SettingsScreen({navigation}){
    const settingsArray = [
        {
            title: "Test 1",
            onPress: () => Alert.alert('Test 1', "Yeeee")
        },
        {
            title: "Test 2",
            onPress: () => Alert.alert('Test 2', "Yeeee")
        },
        {
            title: "Test 3",
            onPress: () => Alert.alert('Test 3', "Yeeee")
        }
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
                <ListButton data={settingsArray} />
            </View>

        </SafeAreaView>
    );
};