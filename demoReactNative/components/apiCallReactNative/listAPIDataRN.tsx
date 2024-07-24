import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const ListAPIData = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(url)
        result = await result.json();
        console.warn(result);
        if (result) {
            setData(result)
        }

    }
    const deleteUser = async (id) => {

        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
        result = await result.json();
        if (result) {
            console.warn("User deleted");
            getData()

        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <View style={style.container}>
            {
                data.length ?
                    data.map((item) => <View style={style.dataWrapper}>
                        <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                        <View style={{ flex: 1 }}><Text>{item.email}</Text></View>
                        <View style={{ flex: 1 }}><Button title='Update' /></View>
                        <View style={{ flex: 1, paddingLeft: 10 }}><Button title='Delete' onPress={() => deleteUser(item.id)} /></View>
                    </View>)
                    :
                    null
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5,
        padding: 5
    }
})