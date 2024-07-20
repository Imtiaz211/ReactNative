import {ScrollView, StyleSheet, Text, View} from 'react-native';
const ListMapFunction = () => {

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
        }
    ]
    return (
        <View>
            <Text style = {{fontSize: 31}}> List with Map function</Text> 
            <ScrollView style = {{marginBottom: 80}}>
            {
                user.map((item) => <Text style = {styles.item}>{item.name}</Text>)
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: "#fff",
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})
export default ListMapFunction;