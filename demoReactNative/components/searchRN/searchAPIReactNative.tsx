import { useState } from 'react'
import { View, Text, TextInput, Button, ScrollView } from 'react-native'
export const SearchAPIReactNative = () => {

    const [searchParam, setSearchParam] = useState(undefined)
    const [data, setData] = useState([])

    const searchAction = async () => {
        const url = `http://192.168.4.22:3000/user?q=${searchParam}`;
        let result = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        result = await result.json();
        if (result) {
            setData(result)
        }
    }
    return (
        <View>
            <TextInput
                placeholder='Search'
                style={{
                    borderColor: 'skyblue',
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                    margin: 10
                }}
                value={searchParam}
                onChangeText={(text) => setSearchParam(text)}
            />
            <View style={{ margin: 10 }}>
                <Button
                    title='Search'
                    onPress={(text) => searchAction()}
                />
            </View>
            <ScrollView style={{
                borderColor: 'red',
                borderWidth: 1
            }}>
                {
                    data.length ?
                        data.map((items) => <View style={{
                            flexDirection: 'row',
                            borderBottomColor: 'blue',
                            borderWidth: 1,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ fontSize: 18 }}>{items.name}</Text>
                            <Text style={{ fontSize: 18 }}>{items.age}</Text>
                            <Text style={{ fontSize: 18 }}>{items.email}</Text>
                        </View>)
                        : null
                }
            </ScrollView>
        </View>
    )
}