import { Component } from "react";
import { Text, View } from "react-native";
import { BackgroundImageLearning } from "../components/Sep04092024/backgrounImage";
import ImtiazAppLearning from "../components/loginSplashApp/mainAppComponent";


class HomeLearning extends Component {
    render() {
        return (
            <View>
            <ImtiazAppLearning />
            {/* <BackgroundImageLearning /> */}
            </View>
        )
    }
}
export default HomeLearning