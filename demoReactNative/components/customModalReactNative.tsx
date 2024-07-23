import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CustomModalReactNative = () => {
    const [show, setShow] = useState(false)
    function getUpdate() {
        setShow(false)
    }
    return (
        <View style={Styles.modal}>
            {
                show ? <View style={Styles.body}>
                <View style={Styles.body}>
                    <Text>Hello Learning React Native</Text>
                    <Button title='Close Modal' onPress={() => getUpdate()}></Button>
                </View>
            </View>
            : null
            }
            <Button title='Open Modal' onPress={() => setShow(true)}></Button>
        </View>
    )
}
const Styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,1)',
        justifyContent: 'flex-end',
    },
    body: {
        backgroundColor: '#fff',
        height: 300,
        width: 300,
        padding: 20,
        justifyContent: 'center',
        alignItems:'flex-start',
        borderRadius: 10
    }
})
export default CustomModalReactNative