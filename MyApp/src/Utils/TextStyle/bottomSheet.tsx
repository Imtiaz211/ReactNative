import { StyleSheet } from 'react-native'

const bottomStyle = StyleSheet.create({
    modalContainer: {
        flex:1,
        justifyContent:'flex-end',
    },

    backdrop: {
        flex:1,
        backgroundColor: '#000',
    },
    sheetContainer : {
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius:16,
        borderTopRightRadius: 16,
        shadowColor:'#000',
        shadowOffset: {width:0, height:-4},
        shadowOpacity:0.2,
        shadowRadius:8,
        elevation:20,
        overflow:'hidden',
    },
    handleArea: {
        height:48,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    handle: {
        width:60,
        height:6,
        borderRadius:3,
        backgroundColor:'#ddd',
    },
closeButton: {
position:'absolute',
right:16,
top:12,
paddingHorizontal:8,
paddingVertical:6
},
    closeText: {
        color:'#007AFF',
        fontWeight:'600',
    },
    contentArea: {
        flex:1,
        backgroundColor:'transparent',
    },
});


export default bottomStyle;