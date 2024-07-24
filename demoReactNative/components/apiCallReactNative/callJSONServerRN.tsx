import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
export const CallJSONServer = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        // "http://10.0.2.2:300/user"; 
        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <View>
            <Text>Call JSON Server API</Text>

            {
                data.length ?
                    data.map((item) => <View style={{
                        borderColor:'red',
                        borderWidth:1
                        }}>
                        <Text style={{fontSize:20}}>Name:{item.name}</Text>
                        <Text style={{fontSize:20}}>Email:{item.email}</Text>
                        <Text style={{fontSize:20}}>Age:{item.age}</Text>
                    </View>)
                    :
                    null
            }
        </View>
    )
}