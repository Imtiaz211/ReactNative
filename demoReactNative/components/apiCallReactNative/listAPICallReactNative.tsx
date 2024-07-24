import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
export const ListAPICallReactNative = () => {

    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <ScrollView>
            <Text style={{ fontSize: 30 }}>List API Call</Text>
            {
                data.length ?
                    data.map((item) => <View style={{
                        padding: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1
                    }}>
                        <Text style={{ backgroundColor: '#ddd', textAlign:'center' }}>{item.id}</Text>
                        <Text style={{fontStyle:'bold', color:'black'}}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                    )
                    :
                    null
            }
        </ScrollView>
    )
}