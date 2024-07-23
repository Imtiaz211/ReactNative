import { useState } from 'react'
import {View,Text,Button, TextInput} from 'react-native'
export const Login = (props) => {
    const [name, setName]=useState()
    const age=35
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <TextInput
            placeholder='Enter your name'
            style={{fontSize:20, borderColor:'black',borderWidth:2, margin:20}}
            onChangeText={(text)=>setName(text)}
            />
            <Button title='Go to home page' 
            // Short form to pass data on another class
            onPress={() => props.navigation.navigate('Home', {name, age})} />
            {/*  By name pass data on another class */}
            {/* onPress={() => props.navigation.navigate('Home', {name:name, age:age})} /> */}
            {/* Static data pass to another class */}
            {/* onPress={() => props.navigation.navigate('Home', {name:"Imtiaz", age:"36"})} /> */}
        </View>
    )

}