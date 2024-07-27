import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export const HeaderReduxFileRN = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItem, setCartItem] = useState(0)
    useEffect(() => {
        setCartItem(cartData.length)
    }, [cartData])

    return (
        <View>
            <Text style={Style.headerText}> 
                <View style={{
                    backgroundColor:'yellow', 
                    borderRadius:15, 
                    borderColor:'blue',
                    height:40,
                    width:40
                    }}>
                        <Text style={{fontSize:20}}>{cartItem}</Text>
                    </View>
            </Text>
        </View>
    )
}
const Style=StyleSheet.create({
    container:{
        flex:1
    },
    headerText:{
        fontSize: 30, 
        textAlign: 'right', 
        padding: 10, 
        backgroundColor: 'orange'
    }
})