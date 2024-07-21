import {View, StyleSheet} from 'react-native'
const ResponsiveUI = () => {
    return(
        <View style={{backgroundColor:'red',flex:1}}>
        </View>
    )
}
const Style=StyleSheet.create({
    main:{
        backgroundColor:'red',
        flex:1
    },
    Box1:{
        flex:1,
        backgroundColor:'blue'
    },
    Box2:{
        flex:1,
        backgroundColor:'green'
    },
    Box3:{
        flex:1,
        backgroundColor:'yellow'
    }

})
// Flex:1 it consume 50%
// Flex:1 it consume 50%
export default ResponsiveUI