import { useState } from 'react'
import { View, Text, Modal, StyleSheet, Button } from 'react-native'
const ModalReactNative = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <View>
            <Modal
                transparent={true}
                visible={showModal}
                animationType='slide'
            >
                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <Text style={Styles.modalText}>Modal React Native</Text>
                        <Button title='Close Modal' onPress={()=>setShowModal(false)}/>
                    </View>
                </View>
            </Modal>



            <Button title='Open Model' onPress={() => setShowModal(true)} />
        </View>
    )
}

const Styles = StyleSheet.create({
    centeredView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        backgroundColor:'skyblue',
        padding:40,
        borderRadius:20,
        shadowColor:'black',
        elevation:5
    },
    modalText:{
        fontSize:30,
        margin:20
    }
})
export default ModalReactNative