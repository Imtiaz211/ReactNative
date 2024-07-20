import { FlatList, StyleSheet, Text, View } from 'react-native';
const ListArrayReactNative = () => {

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
        }
    ]


    return (
        <View>
            <Text style={{ fontSize: 20 }}>List with flat list component</Text>
            <FlatList
                data={user}
                renderItem = {({item}) => <Text style = {styles.item}>{item.name}</Text>}

            />
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: "#fff",
backgroundColor: 'blue',
borderColor:'black',
borderWidth:1,
margin: 10
    }
})

export default ListArrayReactNative;