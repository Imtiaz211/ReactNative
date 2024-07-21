import { View, Text, TouchableHighlight, Button, StyleSheet } from "react-native"
const TouchableReactNative = () => {
    return (
        <View>
            <TouchableHighlight>
                <Text style={[Style.button,Style.sucess]}>Sucess</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[Style.button,Style.primary]}>Primary</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[Style.button,Style.warning]}>Warning</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[Style.button,Style.error]}>Error</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={Style.button}>Button</Text>
            </TouchableHighlight>

        </View>
    )
}

const Style = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        backgroundColor: '#bbb',
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    sucess:{backgroundColor:'green'},
    primary:{backgroundColor:'blue'},
    warning:{backgroundColor:'gold'},
    error:{backgroundColor:'red'}
})
export default TouchableReactNative