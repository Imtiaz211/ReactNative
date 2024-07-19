import { Text, View, StyleSheet } from 'react-native';

const BasicStyleReactNative = () => {
    return (
        <View>
            {/* Inline style*/}
            <Text style={{ fontSize: 30, color: 'red' }}> Basic Style in React Native</Text>
            
            {/* Internal Style*/}
            <Text style={Style.textBox}> Basic Style in React Native</Text>
            <Text style={Style.textBox}> Basic Style in React Native</Text>
            <Text style={Style.textBox}> Basic Style in React Native</Text>
            <Text style={Style.textBox}> Basic Style in React Native</Text>
            <Text style={Style.textBox}> Basic Style in React Native</Text>



        </View>
    )
}

const Style = StyleSheet.create({
    textBox: {
        color: 'blue',
        fontSize:30,
        backgroundColor:'lightblue',
        margin: 10,
        padding: 5,
        borderRadius: 10,
        height: 100,
        textAlignVertical:'center',
        textAlign:'center',
        borderColor: 'black',
        borderWidth: 5
    }
})

export default BasicStyleReactNative;