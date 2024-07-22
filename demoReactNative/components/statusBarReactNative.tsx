import { useState } from "react"
import {View, Text, StatusBar, Button} from "react-native"

const StatusBarReaactNative = () => {
    const [showStatus,setShowStatus]=useState(false)
    const [barStyle,setContentStyle]=useState("default")
    return(
        <View>
            <StatusBar
            hidden={showStatus}
            backgroundColor={"red"}
            barStyle={barStyle}
            />
            <Text style={{fontSize:25}}>Hello Status</Text>
            <Button title="Status Bar" onPress={()=>{setShowStatus(!showStatus)}}/>
            <Button title="Update" onPress={()=> setContentStyle("dark-content")}/>
        </View>
    )
}
export default StatusBarReaactNative