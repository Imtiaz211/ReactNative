import { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
const ShowHideReactNative = () => {
    const [show, setShow] = useState(false)
    return (
        <View>
            <Text style={{ fontSize: 25 }}>Show Hide Components</Text>
            <Button
                title='Toggle component'
                onPress={() => setShow(!show)}
            />
            {
                show ? <ShowHide /> : null
            }
        </View>
    )
}
const ShowHide = () => {
let timer=setInterval(()=> {
    console.warn("Timer called");
}, 2000)

    useEffect(()=>{
      return ()=> clearInterval(timer) //console.warn("Hello");
        
    })

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Show Components</Text>
        </View>
    )
}
export default ShowHideReactNative