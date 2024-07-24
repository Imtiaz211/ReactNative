import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
export const APICallReactNative = () => {

const [data, setData]=useState(undefined)

    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1"
        let result = await fetch(url)
        result = await result.json()
        setData(result)
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <View>
            <Text style={{ fontSize: 30 }}>API Call</Text>
            {
                data? <View>
                    <Text style={{ fontSize: 30 }}>UserId:{data.userId}</Text>
                    <Text style={{ fontSize: 30 }}>Id:{data.id}</Text>
                    <Text style={{ fontSize: 30 }}>Title:{data.title}</Text>
                    <Text style={{ fontSize: 30 }}>Body:{data.body}</Text>
                </View>: null
            }
        </View>
    )
}