import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
export const POSTAPIReactNative = () => {

    const postData = async () => {
        const data = {
            "name": "ImtiaziOS_ReactNative",
            "email": "test@123.com",
            "age": 32
        }

        const url = "http://192.168.4.22:3000/user"
        let restult = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
        restult = restult.json();
        console.warn("Result");
    }

    useEffect(() => {
        postData()
    }, [])

    return (
        <View>
            <Text>Post API Call</Text>
            <Button title='Post Data' onPress={postData}
            />
        </View>
    )
}