import React from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import appStyle from "../../Utils/TextStyle/textStyle";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {

const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const navigation = useNavigation();


const handleSubmit = () => {
  if (email === '' && password === '') {
    Alert.alert('Erro', 'Please enter both email and password');
    return;
  }
  console.log('Logging in with:', email, password);
//   navigation.navigate('Home');
}
  return (
    <View style={appStyle.container}>
      <Text style={appStyle.text}>
        Imtiaz Ahmad {"\n"} React Native Developers
      </Text>

      <TextInput
        style={appStyle.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      ></TextInput>

      <TextInput
        style={appStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      ></TextInput>

      <View style={appStyle.buttonContainer}>
        <TouchableOpacity>
            <Text style={appStyle.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;