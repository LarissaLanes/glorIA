import styled from "styled-components"
import { BackgroundChatColor, RedColor, TextColor } from "../../constants/colors/Colors"

export const DivChat = styled.div`
    // border: solid 3px green;
    background-color: ${BackgroundChatColor}; 
    width: 100vw;
    height: 100vh;
    overflow: auto;
    max-height: 100vh;
`
export const DivButtonBack = styled.div`
    display: flex;
    // border: solid 4px black;
    justify-content: center;

    button{
        background-color: transparent;
        border:none;

        img{
            height: 10px;
            padding: 10px;
        }
    }
`

export const DivLoading = styled.div`
    // border: solid 4px pink;
    display: flex;
    justify-content: center;
    margin-top: 40vh;
`
export const DivInputButton = styled.div`
    // border: solid 1px red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    position:fixed;
    bottom: 2%;
    gap: 1%;

    input{
        width: 58vw;
        height: 40px;
        border:  none;
        outline: none;
        padding: 0.6rem;
        border-radius: 30px 30px 30px 30px;
    }

    button{
        border-radius: 50%;
        heigth: 3rem;
        width: 4rem;
        background-color: ${RedColor};
        border: none;

        img{
            margin: 20px 0;
            height: 20px;
        }
    }
`
