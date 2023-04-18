import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Button({ title, onPress, ...props }) {
    return (         
        <TouchableOpacity
            style={{
                backgroundColor: '#29981b',
                padding: 10,
                width: "100%",
                marginTop: 16,
                borderRadius: 10
            }}
            onPress={onPress}>
            <Text style={{
                textAlign: "center",
                color: "#fff"
            }}>{title}</Text>
        </TouchableOpacity>    
    )
}

function ListButtonItem({ title, onPress, position = "solo" }) {
    let borderStyle = {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    };
    switch (position) {
        case "start":
            borderStyle.borderTopLeftRadius = 10;
            borderStyle.borderTopRightRadius = 10;
            borderStyle.borderBottomColor = "#b3b3b3";
            borderStyle.borderBottomWidth = 0.5;
            break;
        case "end":
            borderStyle.borderBottomLeftRadius = 10;
            borderStyle.borderBottomRightRadius = 10;
            break;
        case "middle":
            borderStyle.borderBottomColor = "#b3b3b3";
            borderStyle.borderBottomWidth = 0.5;
            break;
        default:
            borderStyle = {
                borderRadius: 10
            };
            break;
    }

    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#29981b',
                padding: 10,
                width: "100%",
                marginTop: position == "solo" ? 16 : 0,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                ...borderStyle
            }}
            onPress={onPress}>
            <Text style={{
                color: "#fff"
            }}>{title}</Text>
            <MaterialCommunityIcons name="chevron-right" color={"#fff"} size={24} />
        </TouchableOpacity>        
    );
};

function ListButton({ data }) {
    if(data.length > 1) {
        return (
            <>
                {data.map(elem => 
                    <ListButtonItem key={data.indexOf(elem)} title={elem.title} onPress={elem.onPress} position={data.indexOf(elem) == 0 ? "start" : data.indexOf(elem) == data.length-1 ? "end" : "middle"} />
                )}
            </>
        );
    } else {
        return <ListButtonItem title={data[0].title} onPress={data[0].onPress}></ListButtonItem>
    }
}

export {
    Button,
    ListButtonItem,
    ListButton
};