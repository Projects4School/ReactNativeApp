import { Alert, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Button, Headline, Text } from "react-native-paper";

export default function SaveFile({navigation}){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
                <Headline>Welcome to React Native Project</Headline>
                <Text>This application is developed using React Native Paper</Text>
            </View>
        </SafeAreaView>
    );
};