import { View, Text, FlatList, StyleSheet } from 'react-native';
const LoopComponentReactNative = () => {
    const user = [
        {
            id: 1,
            name: 'Imtiaz',
            email: '123@gmail.com'
        },
        {
            id: 2,
            name: 'Imtiaz',
            email: '123@gmail.com'
        },
        {
            id: 3,
            name: 'Imtiaz',
            email: '123@gmail.com'
        },
        {
            id: 4,
            name: 'Imtiaz',
            email: '123@gmail.com'
        },
        {
            id: 5,
            name: 'Imtiaz',
            email: '123@gmail.com'
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 27 }}>Component with loop in flatlist</Text>
            <FlatList
                data={user}
                renderItem={({ item }) => <UserData item={item} />}
            />
        </View>
    )
}

const UserData = (dataProps) => {
    const item = dataProps.item;
    return (
        <View style={Style.box}>
            <Text style={Style.item}>{item.name}</Text>
            <Text style={Style.item}>{item.email}</Text>
        </View>
    )

}
const Style = StyleSheet.create({
    item: {
        fontSize: 24,
        color: 'orange',
        flex: 1,
        margin: 1,
        textAlign: 'center',
        backgroundColor: 'green'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 5
    }
})

export default LoopComponentReactNative;