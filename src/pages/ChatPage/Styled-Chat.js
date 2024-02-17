import styled from "styled-components"
import { BackgroundChatColor, RedColor, TextColor ,WhiteColor } from "../../constants/colors/Colors"

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
    display: fixed;
    justify-content: center;
    margin-bottom: 40vh;
    margin-top: 30px;
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

export const DivBoxUserMessage = styled.div`
    background-color: ${RedColor};
    // height: 50px;
    width: 60vw;
    display: flex;
    justify-content: flex-start;
    // text-align: center;
    margin-left: 100px;
    padding: 1rem;
    border-radius: 30px;
    color: ${WhiteColor}



`

export const DivBoxGptMessage = styled.div`
    background-color: ${WhiteColor};
    color: ${TextColor};
    // width: 60vw;
    display: flex;
    justify-content: flex-start;
    // margin-left: 50px;
    margin: 18px;
    // text-align: right;
    padding: 1rem;
    border-radius: 20px;


`

export const DivListResponseBdGpt = styled.div`
    
    img{
        max-width: 100%;
    }
`

export const DivGpt = styled.div`
    border: solid 1px red;
`

