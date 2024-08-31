import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Calendar } from 'react-native-calendars';
import { select } from "redux-saga/effects";

// Much more feature available in calendar try to look documentation of reactNative docs.
export const ReactNativeCalendar = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={CalendarStle.container}>
            <Text style={{ fontSize: 30 }}>React Native Calendar </Text>
            <Text style={{ fontSize: 30 }}>Second Line of Calendar</Text>


            <TouchableOpacity
                style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    margin: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => setShowModal(true)}
            >
                <Text style={{ color: 'white', fontSize: 22, margin:10 }}>Show Calendar</Text>
            </TouchableOpacity>

            <Modal visible={showModal} animationType="fade">
                <Calendar
                    // markedDates={{
                    //     '2024-08-25': {
                    //         select: true,
                    //         marked: true,
                    //         selectedColor: "purple",
                    //         dotColor: 'red',
                    //         selectedTextColor: 'blue',
                    //     },
                    // }}

                    markingType={'period'}
                    markedDates={{
                        '2024-08-12':{startingDate: true, color:'lightGreen'},
                        '2024-08-20':{endingDate: true, color:'lightGreen'},
                    }}


                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        todayTextColor: '#00adf5',

                    }}
                    style={{
                        borderRadius: 10,
                        elevation: 4,
                        margin: 40
                    }}
                    onDayPress={(date: any) => {
                        console.log(date)
                        setShowModal(false)
                    }}
                    onMonthChange={(month: any) =>
                        console.log('Month chnages', month)
                    }

                // enableSwipeMonths={true}
                // disableAllTouchEventsForDisabledDays={true}
                // showWeekNumbers={true}
                // renderArrow={(direction) => <Arrow/ }
                // disableMonthChange={true}
                // monthFormat= {'yyyy MMM'}
                // hideArrows={true}
                // initialDate={"2024-10-20"}
                // minDate={'2024-1-1'}
                // maxDate={'2024-12-31'}
                // hideExtraDays={true}
                // hideDaysNames={true}
                // current={'2024-8-31'}
                />
            </Modal>
        </View>

    )
}


const CalendarStle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    }
})