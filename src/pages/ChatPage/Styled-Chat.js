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
    margin-top: 1rem;

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

export const Bottom = styled.div`
    flex-direction: column;
`
export const DivMessageMock = styled.div`
    // border: solid 3px black;
    overflow-x: auto;
    // white-space: nowrap;
    padding: 10px;
    
    li {
        // border: solid 3px orange;
        list-style: none;
        // margin-right: 10px;
        padding: 7px;

        ul{
            // border: solid 3px yellow;
            // display: flex;
            padding: 0;
            

            button {
                border: solid 1px ${RedColor};
                background: transparent;
                height: auto;
                border-radius: 50px;
                padding: 7px;
                color: ${RedColor};
                margin: 3px;
                // white-space: nowrap;
            }
        }

       
    }
`

export const DivTexts = styled.div`
    // border: solid 3px green;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
    position:fixed;
    bottom: 6%;

    
`
export const DivInputButton = styled.div`
    border: none;
    background-color: ${BackgroundChatColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    position:fixed;
    bottom: 0%;
    gap: 1%;
    

    input{
        width: 67vw;
        height: 40px;
        border:  none;
        outline: none;
        padding: 0.6rem;
        border-radius: 30px 30px 30px 30px;
    }

    button{
        border: none;
       
        
        


        img{
            // margin: 20px 0;
            height: 20px;
        }
    }
`

export const BtnVoice = styled.button`
    border-radius: 50%;
    heigth: 2rem;
    width: 4rem;
    background-color: ${RedColor};
    border: none;

    img{
        margin: 20px 0;
        height: 20px;
        
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
    // border: solid 4px red;
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    font-size: .8em;
    
    

    section{
        // border: solid green 2px;
        display: flex;
        height: 30px;
        align-items: center;
        button{

        }

        p{
            color: ${TextColor};
        }

    }
`

export const BtnTextoSpecth = styled.button`
    border: solid 1px ${RedColor};
    border-radius: 20px;
    width: 100px;
    height: 25px;
    color: ${RedColor};
    font-size: 15px;
    font-style: bold;
    cursor: pointer;

    img{
        width: 10px;
        margin-right: 6px;
        
    }

    
`

