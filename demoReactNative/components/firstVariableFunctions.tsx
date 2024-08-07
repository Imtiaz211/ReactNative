import { View, Text } from 'react-native';
import UserData from './userData';

const name = "Imtiaz Ahmad";
let age = 36;
var email = "imtiazahmad211@gmail.com"
function fruits() {
    return "Imtiaz Apple";
}


const VariableAndFunction = () => {
    return (
        <View>
            <UserData />
            { /* Ternery operator */}
            <Text style={{ fontSize: 30 }}>{age === 36 ? "Above 30" : "Unknown age"}</Text>

            {/* Variables*/}
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Text style={{ fontSize: 30 }}>{age}</Text>
            <Text style={{ fontSize: 30 }}>{email}</Text>

            {/* functions */}
            <Text style={{ fontSize: 30 }}>{fruits()}</Text>

            <Text style={{ fontSize: 30 }}>Imtiaz Ahmad, React Native</Text>
            <Text style={{ fontSize: 30 }}>Like</Text>
            <Text style={{ fontSize: 30 }}>Comment Native</Text>
            <Text style={{ fontSize: 30 }}>subscribe</Text>
        </View>
    )
}

export default VariableAndFunction;