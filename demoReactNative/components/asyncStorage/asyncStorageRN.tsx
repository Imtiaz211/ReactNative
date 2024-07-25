import { View, Text, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from "react"
export const AsyncStorageReactNative = () => {

    const [name, setName] = useState("")

    const setData = async () => {
        await AsyncStorage.setItem("name", "Imtiaz Ahmad")
    }
    const getData = async () => {
        const values = await AsyncStorage.getItem("name")
        setName(values)
    }
    const removeData = async () => {
        await AsyncStorage.removeItem("name")
        setName('')
    }

    return (
        <View>
            <Text style={{ fontSize: 24, textAlign:'center', backgroundColor:'yellow' }}>Async Storage | {name}</Text>

            <Button title="Set Data" onPress={setData} />
            <View style={{marginTop:10}}>
                <Button title="Get Data" onPress={getData} />
            </View>
            <View style={{marginTop:10}}>
                <Button title="Remove Data" onPress={removeData} />
            </View>




        </View>
    )
}