import { View, Text, Image, Button } from 'react-native'
export const ProductReduxFileRN = (props) => {
const item = props.item

    return (
        <View style={{alignItems:'center', borderColor:'orange', borderBottomWidth:1, padding:10}}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            <Button title='Add to Cart'/>
        </View>
    )
}