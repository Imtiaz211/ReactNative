import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
const PressableReactNative = () => {
    return (
        <View>
            <Pressable
                onPress={() => { console.warn("Normal button press");
                }}
                onLongPress={() => {console.warn("On long press");
                 }}
                onPressIn={() => { console.warn("On Button Press In");
                }}
                onPressOut={() => { console.warn("on Leave button press");
                }}
            >
                <Text style={Style.pressableBTN}>
                    Pressabe
                </Text>
            </Pressable>
        </View>
    )
}

const Style = StyleSheet.create({
    pressableBTN: {
        fontSize: 25,
        backgroundColor:'black',
        color:'#fff',
        padding:10,
        margin: 10,
        borderRadius:10,
        textAlign:'center',
        shadowColor:'#000',
        elevation:5
        

    }
})
export default PressableReactNative