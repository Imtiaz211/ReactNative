import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import bottomStyle from '../TextStyle/bottomSheet';
import demoStyles from '../TextStyle/demoSheet';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = ({
  visible=false,
  onClose = () => {},
  children = <View/>,

  sheetHeight = Math.round(SCREEN_HEIGHT * 0.6),
  closeOnBackdropPress = true,
}) => {
  const translateY = useRef(new Animated.Value(sheetHeight)).current; // start off-screen
  const backdropedOpacity = useRef(new Animated.Value(0)).current;
  const isOpen = useRef(false);

  // Pan responder for swipe down to dismiss
  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderGrant: () => {
        pan.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
            pan.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const shouldClose = gestureState.dy > sheetHeight * 0.25 || gestureState.vy > 1.5;
        if (shouldClose) {
            closeSheet();
        } else {
            Animated.spring(pan, {
                toValue: 0,
                useNativeDriver: true,
                bounciness: 0,
            }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (visible) openSheet();
    else closeSheet();
  }, [visible]);

  const openSheet = () => {
    isOpen.current = true;
    pan.setValue(0);
    Animated.parallel([
        Animated.timing(backdropedOpacity, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: true,
        }),
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            bounciness: 6,
        }),
    ]).start();
  };

  const closeSheet = (instant = false) => {
    isOpen.current = false;
    const timing = instant 
        ? Animated.timing(
            backdropedOpacity, {
                toValue: 0, 
                duration: 0, 
                useNativeDriver: true
            })
        : Animated.timing(
            backdropedOpacity, {
                toValue: 0, 
                duration: 200, 
                useNativeDriver: true
            });
    Animated.parallel([
        timing,
        Animated.timing(translateY, {
            toValue: sheetHeight,
            duration: instant ? 0 : 250,
            useNativeDriver: true,
        }),
    ]).start(() => {
        onClose();
    });
  };

  const handledBackdropPress = () => {
    if (closeOnBackdropPress) closeSheet();
  };

  const animatedTranslateY = Animated.add(translateY, pan);

  return (
    <Modal
    visible = {visible}
    animationType='none'
    transparent
    statusBarTranslucent
    onRequestClose={() => closeSheet()}
    >
        <SafeAreaView style={bottomStyle.modalContainer} pointerEvents='box-none'>
            <Pressable style={StyleSheet.absoluteFill} onPress={handledBackdropPress}>
                <Animated.View 
                    style={[
                        bottomStyle.backdrop, 
                        {opacity: backdropedOpacity},]}>
                            </Animated.View>
    </Pressable>
<Animated.View 
    style={[
        bottomStyle.sheetContainer,
         {
            height: sheetHeight,
            transform: [{translateY: animatedTranslateY}],
         },]}>
            <View {...panResponder.panHandlers} style = {bottomStyle.handleArea}>
                <View style={bottomStyle.handle}/>
                <TouchableOpacity onPress={()=> closeSheet()} style={bottomStyle.closeButton} accessibilityLabel='Close'>
                    <Text style={bottomStyle.closeText}>Close</Text>
                </TouchableOpacity>
                </View>
                <View style={bottomStyle.contentArea} {...children}></View>
                </Animated.View>
</SafeAreaView>
    </Modal>
  );
};



export default function BottomSheetDemo() {
    const [open, setOpen] = useState(false);
    return(
        <View style={demoStyles.wrapper}>
            <TouchableOpacity style={demoStyles.button} onPress={() => setOpen(true)}>
                <Text style={demoStyles.buttonText}>Open iOS - style Bottom Popup</Text>
            </TouchableOpacity>
            <BottomSheet visible={open} onClose={() => setOpen(false)}>
                <View style={{padding:20}}>
                    <Text style={{fontSize:18, fontWeight: 600, marginBottom:8}}>Hello from the Bottom Sheet</Text>
                    <Text style={{color:'#444'}}>This is an iOS like popup implemented in pure React Native. You can drag down or tap outside to dismiss</Text>
                    <TouchableOpacity
                    onPress={()=> setOpen(false)}
                    style={{marginTop:20, backgroundColor: '#0A84FF', paddingVertical:10,borderRadius:8}}>
                        <Text style={{textAlign:'center', color:'white', fontWeight:600}}>Close</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    );
}
