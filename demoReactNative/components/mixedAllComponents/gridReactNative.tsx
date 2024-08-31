import { View, Text, StyleSheet, ScrollView } from 'react-native';
const GridReactNative = () => {
    const user = [
        {
            id: 1,
            name: "Imtiaz 1"
        },
        {
            id: 2,
            name: "Imtiaz 2"
        },
        {
            id: 3,
            name: "Imtiaz 3"
        },
        {
            id: 4,
            name: "Imtiaz 4"
        },
        {
            id: 5,
            name: "Imtiaz 5"
        },
        {
            id: 6,
            name: "Imtiaz 6"
        },
        {
            id: 7,
            name: "Imtiaz 7"
        },
        {
            id: 8,
            name: "Imtiaz 8"
        },
        {
            id: 9,
            name: "Imtiaz 9"
        },
        {
            id: 10,
            name: "Imtiaz 10"
        },
        {
            id: 11,
            name: "Imtiaz 11"
        },
        {
            id: 12,
            name: "Imtiaz 12"
        },
        {
            id: 13,
            name: "Imtiaz 13"
        },
        {
            id: 14,
            name: "Imtiaz 14"
        },
        {
            id: 15,
            name: "Imtiaz 15"
        },
        {
            id: 16,
            name: "Imtiaz 16"
        },
        {
            id: 17,
            name: "Imtiaz 17"
        },
        {
            id: 18,
            name: "Imtiaz 18"
        },
        {
            id: 19,
            name: "Imtiaz 19"
        },
        {
            id: 20,
            name: "Imtiaz 20"
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Grid With dynamic Data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    user.map((item) => <Text style={Style.item}>{item.name}</Text>)
                }
                
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor: 'blue',
        color: '#fff',
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})
export default GridReactNative;