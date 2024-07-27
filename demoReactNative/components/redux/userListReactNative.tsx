import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './actionRN'


export const UserListReactNative = () => {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.reducer)

    useEffect(() => {
        dispatch(getUserList())
    }, [])
    console.warn(userList.length);

    return (
        <View>
            {
                userList.length ? <FlatList
                    data={userList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={{ fontSize: 20 }}>User List</Text>
                        </View>} />
                    : null
            }
        </View>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1
    }
})