import { Component } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

class ClassComponentReactNative extends Component {
    constructor(props: string) {
       super(props);
       this.state={
        name:'Imtiaz Ahmad'
       }; 
    }

    updateName(val: string) {
        this.setState({name:val})
    }
    fruit = () => {
        console.warn("Apple");
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 25 }}>{this.state.name}</Text>
                <TextInput
                placeholder='Enter your name'
                onChangeText={(text)=>this.updateName(text)}
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