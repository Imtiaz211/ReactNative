import { View, Text, Image, ScrollView } from 'react-native'
import { HeaderReduxFileRN } from './headerReactNative'
import { ProductReduxFileRN } from './productReactNative'
export const ReduxFileRN = () => {
    const products = [
        {
            name: "samsumg",
            price: 30000,
            color: 'red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Apple",
            price: 130000,
            color: 'red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        },
        {
            name: "Nokia",
            price: 20000,
            color: 'red',
            image: 'https://media.istockphoto.com/id/1377411420/vector/studio-shot-of-smartphone-with-blank-screen-for-infographic-global-business-front-view.jpg?s=2048x2048&w=is&k=20&c=xFeOcVoQxvlf_MRZpc5NsUVr2UQG6vLrC3XUickjm9A='
        }

    ]
    return (
        <View>
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