import { Button } from "react-native"
export const HeaderRightRN = () => {

    function headerRightButton() {
        console.warn("Right Button Pressed");
    }
    return (
        <Button title='Ahmad' onPress={() => { headerRightButton() }} />
    )
}
