import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Modal, TextInput } from 'react-native'

export const ListAPIData = () => {

    const [data, setData] = useState([])
    const [selectedUser, setSelectedUser] = useState(undefined)
    const [showModal, setShowModal] = useState(false)

    const update = (item) => {
        setShowModal(true)
        setSelectedUser(item)
        console.warn(item);


    }

    const getData = async () => {
        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(url)
        result = await result.json();
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
                        <View style={{ flex: 1 }}><Button
                            title='Update' onPress={() => update(item)} />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10 }}><Button
                            title='Delete' onPress={() => deleteUser(item.id)} /></View>
                    </View>)
                    :
                    null
            }

            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
            </Modal>

        </View>
    )
}

const UserModal = (props) => {

    const [modalName, setModalName] = useState(undefined)
    const [modalAge, setModalAge] = useState(undefined)
    const [modalEmail, setModalEmail] = useState(undefined)

    useEffect(() => {
        if (props.selectedUser) {
            setModalName(props.selectedUser.name)
            setModalAge(props.selectedUser.age.toString())
            setModalEmail(props.selectedUser.email)
        }
    },[props.selectedUser])
    return (
        <View style={style.centeredView}>
            <View style={style.modalView}>
                <Text style={{ fontSize: 20 }}>Update User:-{props.selectedUser.name}</Text>


                <TextInput
                    style={style.input}
                    placeholder='User Name'
                    value={modalName}
                    onChangeText={(text)=> setModalName(text)}
                />

                <TextInput
                    style={style.input}
                    placeholder='User Age'
                    value={modalAge}
                    onChangeText={(text)=> setModalAge(text)}
                />
                <TextInput
                    style={style.input}
                    placeholder='User Email'
                    value={modalEmail}
                    onChangeText={(text)=> setModalEmail(text)}
                />
                <View style={{ marginBottom: 15 }}>
                    <Button title='Update Info' />
                </View>
                <Button title='Close' onPress={() => props.setShowModal(false)} />
            </View>

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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: "#fff",
        padding: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        elevation: 5
    },
    input: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        margin: 10
    }
})