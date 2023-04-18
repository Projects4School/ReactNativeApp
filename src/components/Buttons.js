import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
            borderStyle.borderBottomColor = "#fff";
            borderStyle.borderBottomWidth = 1;
            break;
        case "end":
            borderStyle.borderBottomLeftRadius = 10;
            borderStyle.borderBottomRightRadius = 10;
            break;
        case "middle":
            borderStyle.borderBottomColor = "#fff";
            borderStyle.borderBottomWidth = 1;
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
                alignitems: 'center',
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

function ListButton({ icons }) {
    if(icons.length > 1) {
        let firstElem = icons.shift();
        let lastElem = icons.pop();
        return (
            <>
                <ListButtonItem title={firstElem.title} onPress={firstElem.onPress} position="start" />
                {icons.map(elem => {
                    <ListButtonItem title={firstElem.title} onPress={firstElem.onPress} position="middle" />
                })};
                <ListButtonItem title={lastElem.title} onPress={lastElem.onPress} position="end"/>
            </>
        );
    } else {
        return <ListButtonItem title={icons[0].title} onPress={icons[0].onpRESS}></ListButtonItem>
    }
}

export {
    ListButtonItem
};