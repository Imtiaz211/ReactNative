import { Button } from "react-native"
export const HeaderLeftRN = () => {
    
    function headerLeftButton() {
        console.warn("Left Button Pressed");   
    }
    return (
        <Button title='Imtiaz' onPress={()=> {headerLeftButton()}}/>
    )
}