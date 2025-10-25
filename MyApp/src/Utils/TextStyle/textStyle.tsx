import { StyleSheet } from 'react-native'

const appStyle = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },

 input: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    marginTop: 20,
  },


  buttonContainer: {
    height: 60,
    width: '100%',
    marginTop: 25,
  },
});
export default appStyle;