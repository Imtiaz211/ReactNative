import { Button, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ReactNativeButtons = () => {

    let data = 100;

    const fruitsOnPress = (values: any) => {
        console.warn(values);
    }

    return (
        <View>
            <Text style = {{fontSize:30}} >{data}</Text>
            {/* Without argument button action*/}
            <Button title="Press Me" color={'green'} onPress={fruitsOnPress} />

            {/* With argument button action*/}
            <Button title="Click Here" color={'green'} onPress={() => fruitsOnPress("This is my first programe")} ></Button>
        </View>
    )
}
export default ReactNativeButtons;