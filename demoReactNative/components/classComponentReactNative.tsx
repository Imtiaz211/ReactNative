import { Component } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

class ClassComponentReactNative extends Component {
    fruit = () => {
        console.warn("Apple");
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 25 }}>Class component in React Native</Text>
                <TextInput
                placeholder='Enter your name'
                />
                <Button
                title='Press me' 
                onPress={this.fruit}
                />
                
            </View>
        )
    }
}
export default ClassComponentReactNative;