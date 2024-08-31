import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
const DynamicRadioButtonReactNative = () => {
    const skills = [
        {
            id: 1,
            name: "iOS"
        },
        {
            id: 2,
            name: "SwiftUI"
        },
        {
            id: 3,
            name: "Objective-C"
        },
        {
            id: 4,
            name: "React Native"
        },
        {
            id: 5,
            name: "Flutter"
        }
    ]
    const [selectRadio, setSelectRadio] = useState(1)
    return (
        <View>
            {
                skills.map((item, index) => <TouchableOpacity
                key={index}
                onPress={()=>setSelectRadio(item.id)}>
                    <View style={Style.radioWrapper}>
                        <View style={Style.radio}>
                            {
                                selectRadio === item.id ? <View style={Style.radioBG}></View> : null
                            }
                        </View>
                        <Text style={Style.radioText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
            }
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

export default DynamicRadioButtonReactNative