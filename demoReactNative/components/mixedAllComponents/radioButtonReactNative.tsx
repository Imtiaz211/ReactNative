import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
const RadioButtonReactNative = () => {
    const [selectRadio, setSelectRadio] = useState(2)
    return (
        <View>
            <TouchableOpacity onPress={() => setSelectRadio(1)}>
                <View style={Style.radioWrapper}>
                    <View style={Style.radio}>
                        {
                            selectRadio === 1 ? <View style={Style.radioBG}></View> : null
                        }
                    </View>
                    <Text style={Style.radioText}>Radio1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectRadio(2)}>
                <View style={Style.radioWrapper}>
                    <View style={Style.radio}>
                        {
                            selectRadio === 2 ? <View style={Style.radioBG}></View> : null
                        }
                    </View>
                    <Text style={Style.radioText}>Radio2</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const Style = StyleSheet.create({
    radioText: {
        fontSize: 20
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBG: {
        backgroundColor: 'black',
        height: 28,
        width: 28,
        borderRadius: 14,
        margin: 4

    }
})

export default RadioButtonReactNative