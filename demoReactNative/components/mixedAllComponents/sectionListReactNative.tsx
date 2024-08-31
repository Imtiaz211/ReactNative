import { View, Text, SectionList } from 'react-native';

const SectionListReactNative = () => {
    const users = [
        {
            id: 1,
            name: "Imtiaz",
            data: ["PHP", "Java", "Flutter"]
        },
        {
            id: 2,
            name: "Ansari",
            data: ["Ruby", "Django", "Salesforce"]
        },
        {
            id: 3,
            name: "Ahmad",
            data: ["SwiftUI", "Swift", "Dart"]
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 31 }}>Section list React Native</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={{ fontSize: 25, color: 'red' }}>{name}</Text>
                )}
            />
        </View>
    );
};
export default SectionListReactNative;