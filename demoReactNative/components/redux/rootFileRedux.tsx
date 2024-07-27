import { View, Text, Image, ScrollView, Button } from 'react-native'
import { HeaderReduxFileRN } from './headerReactNative'
import { ProductReduxFileRN } from './productReactNative'
export const ReduxFileRN = (props) => {
    const products = [
        {
            name: "Samsumg",
            price: 30000,
            color: 'Red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Apple",
            price: 130000,
            color: 'Red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'Red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'Red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'Red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        }

    ]
    return (
        <View>
            <Button title='User list screen' onPress={()=> props.navigation.navigate("Listscreen")}/>
            <HeaderReduxFileRN />
            <ScrollView>
            {
                products.map((item) => <ProductReduxFileRN item={item}/>)
            }
            </ScrollView>
            
            <Text style={{ fontSize: 25 }}> Hello Redux file</Text>
        </View>
    )
}