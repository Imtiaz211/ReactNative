import { View, StyleSheet } from 'react-native'
const ResponsiveUI = () => {
    return (
        <View style={Style.main}>
            <View style={Style.Box1}>
                <View style={Style.InnerBox1}></View>
                <View style={Style.InnerBox2}></View>
                <View style={Style.InnerBox3}></View>
            </View>
            <View style={Style.Box2}></View>
            <View style={Style.Box3}></View>
        </View>
    )
}


const Style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red'
    },
    Box1: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row'
    },
    Box2: {
        flex: 1,
        backgroundColor: 'green'
    },
    Box3: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    InnerBox1: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    },
    InnerBox2: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    },
    InnerBox3: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    }


})
// Flex:1 it consume 50%
// Flex:1 it consume 50%
export default ResponsiveUI