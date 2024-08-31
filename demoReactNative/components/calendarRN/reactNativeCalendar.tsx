import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from 'react-native-calendars';


export const ReactNativeCalendar = () => {
    return (
        <View style={CalendarStle.container}>
            <Text style={{ fontSize: 30 }}>React Native Calendar </Text>
            <Text style={{ fontSize: 30 }}>Second Line of Calendar</Text>


            <TouchableOpacity
                style={{ backgroundColor: 'black', borderRadius: 10, margin: 10 }}>
                <Text style={{ color: 'white', fontSize: 22 }}>Show Calendar</Text>
            </TouchableOpacity>

        </View>

    )
}


const CalendarStle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
})