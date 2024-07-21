import { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
const UseEffectReactiveNative = () => {
    const [cout, setCount] = useState(0);

    {/*// Every time useEffect will called when mount, update,demount, state, props.
        User login, API call can be done here. need restriction to multiple call,

        */}
    useEffect(() => { 
        console.warn("Hello India")
    },[]) // this will restrict to call multiple times. 
    return (
        <View>
            <Text style={{fontSize:25}}>Life cycle with UseEffect</Text>
            <Button
            title='Update me'
            onPress={()=> setCount(2)}
            />
        </View>
    )
}
export default UseEffectReactiveNative;