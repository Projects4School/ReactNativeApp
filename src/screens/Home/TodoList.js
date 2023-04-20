import { Alert, SafeAreaView, FlatList, View } from "react-native";
import { Headline, Text, TextInput, Divider } from "react-native-paper";
import { Button } from "../../components/Buttons";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LeftSwipeActions = () => {
    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: 'green', 
            justifyContent: 'center' 
        }}>
            <MaterialCommunityIcons style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
            }} name="check" color={"#fff"} size={24} />
        </View>
    );
};

const RightSwipeActions = () => {
    return (
        <View style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}>
            <MaterialCommunityIcons style={{ 
                paddingHorizontal: 30,
                paddingVertical: 20,
            }} name="delete" color={"#fff"} size={24} />
        </View>
    );
};

const Task = ({ text, onRightOpen }) => (
    <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={RightSwipeActions}
        onSwipeableRightOpen={onRightOpen}
        onSwipeableLeftOpen={() => { Alert.alert('Task done !', 'This task will be deleted.'); onRightOpen() }}
    >
        <View
            style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: '#35333b',
            }}
        >
            <Text style={{ fontSize: 16 }}>
                {text}
            </Text>
        </View>
    </Swipeable>
  );

export default function TodoListScreen({navigation}){
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify(tasks);
            console.log(jsonValue)
            await AsyncStorage.setItem('@todolist', jsonValue);
        } catch (e) {
            console.error(e);
        }
    }

    const addTask = async () => {
        let newTask = {
            name: text,
            done: false,
            date: Date.now(),
            id: Math.random()*1000
        };

        setTasks(tasksArray => [...tasksArray, newTask]);
        setText("");
        await storeData();
    }

    const onRightOpen = (id) => {
        setTasks((tasksArray) =>
            tasksArray.filter((task) => task.id !== id)
        );
        storeData();
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@todolist');
                const data = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(data);
                //console.log(data)
            } catch (e) {
                console.error(e);
            }
        }
        getData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ padding: 16 }}>
                    <Headline>Welcome to Todo List</Headline>
                    <TextInput label={"Enter task here"} value={text} onChangeText={text => setText(text)} activeOutlineColor="#29981b" mode="outlined" multiline={true} numberOfLines={10} style={{
                        width: "100%"
                    }} />
                    <Button title={"Save task"} onPress={addTask} />
                </View>
                <View style={{
                    marginTop: 20,
                }}>
                    <Headline style={{ padding: 16 }}>Tasks</Headline>
                    <FlatList
                        data={tasks}
                        renderItem={({item}) => <Task text={item.name} onRightOpen={() => onRightOpen(item.id)}/>}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={<View style={{
                            height: 1,
                            backgroundColor: "gray"
                        }}/>}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};