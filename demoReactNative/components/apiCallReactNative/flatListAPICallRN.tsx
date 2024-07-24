import { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
export const FlatListAPIRN = () => {

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
        <View style={{ backgroundColor: 'green' }}>
            <Text style={{ fontSize: 30 }}>Flatlist with API Data</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View style={{
                            borderColor: 'red',
                            borderWidth: 1,
                            margin: 10,
                            backgroundColor: 'cyan',
                            borderRadius: 5
                        }}>
                            <Text style={{
                                borderBottomColor: 'blue', 
                                borderBottomWidth: 0.5,
                                fontSize:20
                            }}>{item.id}</Text>
                            <Text style={{
                                borderBottomColor: 'blue',
                                borderBottomWidth: 0.5,
                                fontSize:18
                            }}>{item.title}</Text>
                            <Text style={{
                                fontSize:18
                            }}>{item.body}</Text>
                        </View>}
                    />
                    :
                    null
            }

        </View>
    )
}