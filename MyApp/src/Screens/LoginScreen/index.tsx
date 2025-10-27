import React from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import appStyle from '../../Utils/TextStyle/textStyle';
import btnStyle from '../../Utils/TextStyle/button';
import ShowImage from '../../Utils/images/icons';


const LoginScreen: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Logging ');
    if (email === '' && password === '') {
      Alert.alert('Erro', 'Please enter both email and password');
      return;
    }
    console.log('Logging in with:', email, password);
      // navigation.navigate('HomeScreen');
  };
  return (
    <View style={appStyle.container}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          // paddingLeft:25,
          width: '80%',
          height: '40%',
          // backgroundColor:'black',
          top: '20%',
          left: '10%',
          // right:'10%',
        }}
      >
        <Text style={appStyle.text}>Login</Text>

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
          <TouchableOpacity
            style={btnStyle.button}
            onPress={handleSubmit}
            disabled={false}
          >
            <Text style={btnStyle.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text>or login with...</Text>
          <View style={appStyle.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <ShowImage 
              imageUrl="/Users/imtiaz_ahmad/Documents/rn/ReactNative/MyApp/src/Assets/google.jpg"
              width={100}
              height={100}
              />
            </TouchableOpacity>
          </View>
          <View style={appStyle.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <ShowImage 
              imageUrl="/Users/imtiaz_ahmad/Documents/rn/ReactNative/MyApp/src/Assets/facebook.png"
              width={100}
              height={100}
              />
            </TouchableOpacity>
          </View>
          <View style={appStyle.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <ShowImage 
              imageUrl="/Users/imtiaz_ahmad/Documents/rn/ReactNative/MyApp/src/Assets/twitter.png"
              width={100}
              height={100}
              /> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
