import { View, Text, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCard, removeFromCard } from '../redux/actionRN'
import { useEffect, useState } from 'react'


export const ProductReduxFileRN = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.reducer)
    const [isAdd, setIsAdd] = useState(false)
    const title = isAdd ? 'Remove from Cart' : 'Add to Cart'

    useEffect(() => {
        let result = cartItem.filter((element) => {
            return element.name === item.name
        })
        setIsAdd(result.length)
    }, [cartItem])


    const handleButtonAction = (item) => {
        dispatch(addToCard(item))
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCard(item.name))
    }

    return (
        <View style={{ alignItems: 'center', borderColor: 'orange', borderBottomWidth: 1, padding: 10 }}>
            <Text style={{ fontSize: 24 }}>Device Name:-{item.name}</Text>
            <Text style={{ fontSize: 24 }}>Price:-{item.price}</Text>
            <Text style={{ fontSize: 24 }}>Color:-{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            <Button title={title} onPress={() =>
                isAdd ? handleRemoveFromCart(item) : handleButtonAction(item)} />

        </View>
    )
}