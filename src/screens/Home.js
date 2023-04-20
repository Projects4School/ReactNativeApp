import { Alert, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Headline, Text } from "react-native-paper";
import { ListButtonItem } from "../components/Buttons";

export default function HomeScreen({navigation}){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <Headline>Welcome to React Native Project</Headline>
                <ListButtonItem title="Write and save file" onPress={() =>
                    navigation.navigate('HomeStack', { screen: 'SaveFile' })
                } />
                <ListButtonItem title="Test camera" onPress={() =>
                    navigation.navigate('HomeStack', { screen: 'Camera' })
                } />
                <ListButtonItem title="Test auth" onPress={() =>
                    navigation.navigate('HomeStack', { screen: 'Auth' })
                } />
            </View>
        </SafeAreaView>
    );
};