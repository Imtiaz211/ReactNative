import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
const UseEffectReactiveNative = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    {/*// Every time useEffect will called when mount, update,demount, state, props.
        User login, API call can be done here. need restriction to multiple call,

        */}
    useEffect(() => {
        console.warn("Hello India:", {count})
    }, []) // this will restrict to call multiple times. only called for count

    useEffect(() => {
        console.warn("Hello India:",{data});

    }, []) // only called for data, other ignore

    return (
        <View>
            <Text style={{ fontSize: 25 }}>Update Counter: {count}</Text>
            <Button
                title='Update Count'
                onPress={() => setCount(count + 1)}
            />
            <Text style={{ fontSize: 25 }}>Update Data: {data}</Text>
            <Button
                title='Update Data'
                onPress={() => setData(data + 1)}
            />
            <UserUseEffect info={{data,count}}/>

        </View>
    )
}

const UserUseEffect = (props) => {
    const tempProps = props.info;
    useEffect(()=> {
        console.warn(tempProps.count);
        
    },[tempProps.count])
    useEffect(()=> {
        console.warn(tempProps.data);
        
    },[tempProps.data])
    return (
        <View>
            <Text style={{fontSize:25}}>Data:{tempProps.data}</Text>
            <Text style={{fontSize:25}}>Count:{tempProps.count}</Text>
        </View>
    )
}

export default UseEffectReactiveNative;