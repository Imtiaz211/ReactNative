import { useState } from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
const ActivityIndicatorReactNative = () => {
    const [show, setShowLoader] = useState(false)

    const startStopLoader = () => {
        setShowLoader(true)
        setTimeout(() => {
            setShowLoader(false)
        }, 5000)
    }


    return (
        <View>
            <Text style={{ fontSize: 25 }}>Activity Indicator</Text>
            {
                show ? <ActivityIndicator size={100} animating={show} /> : null
            }

            {/* <ActivityIndicator
                // size={"large"}
                // size={"small"}
                size={100}
                animating={show}
            /> */}
            <Button
                title='Start Loading'
                onPress={() => startStopLoader()}
            />
        </View>
    )
}
export default ActivityIndicatorReactNative