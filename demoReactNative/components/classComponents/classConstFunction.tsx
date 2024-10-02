import React from "react";
import { Text, View } from "react-native";

export class ClassComponentsForTestCase extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: 0,
        };
    }

    getData(x) {

        return this.setState({value:this.state.value+x});
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.counter}
                </Text>
            </View>
        );
    }
}
export default ClassComponentsForTestCase;