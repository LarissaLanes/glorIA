import { createTheme } from "@material-ui/core/styles"
import {BackgroundChatColor, ButtonsBarItem, RedColor, TextColor, BlackColor, WhiteColor, GreenColor, YellowColor, TextColorInput } from "../colors/Colors";
const Theme = createTheme ({
    palette: {
        primary: {
            main: WhiteColor,
            text: TextColor,
        },
        secondary: {
            main: BackgroundChatColor,
            text: TextColor,
        },
        text:{
            primary: TextColorInput,
        }
    },
})

export default Theme;