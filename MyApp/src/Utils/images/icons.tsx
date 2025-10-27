import React from "react";
import { View, Image, StyleSheet } from 'react-native'

type ImageProps = {
    imageUrl: string;
    width?: number;
    height?: number;
}


const ShowImage: React.FC<ImageProps> = ({imageUrl, width, height}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: imageUrl}}
                style={{width, height}}
                resizeMode="contain"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:20,
    },
});

export default ShowImage;