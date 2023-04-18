import { Alert, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";
import { Button } from "../../components/Buttons";
import { useState } from "react";
import * as Permissions from "expo-permissions";

const saveFile = async (text) => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === "granted") {
        let fileUri = FileSystem.documentDirectory + "text.txt";
        await FileSystem.writeAsStringAsync(fileUri, text, { encoding: FileSystem.EncodingType.UTF8 });
        Alert.alert('Saved!');
    }
}

export default function SaveFile({navigation}){
    const [text, setText] = useState("");
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <Headline>Welcome to text editor</Headline>
                <TextInput label={"Enter text here"} value={text} onChangeText={text => setText(text)} activeOutlineColor="#29981b" mode="outlined" multiline={true} numberOfLines={10} style={{
                    width: "100%"
                }} />
                <Button title={"Save"} onPress={() => Alert.alert('Saved!')} />
            </View>
        </SafeAreaView>
    );
};