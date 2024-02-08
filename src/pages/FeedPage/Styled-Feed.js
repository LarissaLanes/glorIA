import styled from "styled-components";
import { BackgroundChatColor, BlackColor, RedColor, TextColor, WhiteColor } from "../../constants/colors/Colors";

export const DivFeed = styled.div`
    display: flex;
    justify-content: center ;
    width: 100vw;
    height: 100vh;
    background-color: ${BackgroundChatColor};
    // border: solid 3px red;
`
export const DivHeader = styled.div`
    display: flex;
    align-items:center;
    height:15vh;
    width: 100%;
    position:fixed;
    // border: solid 3px pink;
    margin: 0;
`
export const DivListPost = styled.div`
    // border:solid 3px green;
    width: 100vw;
    margin-top: 15vh;
    overflow: auto;
    max-height: 100vh;
} 
`
export const Posts = styled.div`
    // border: 4px solid red;
    padding: 1rem;
    margin-top: 15px;
    color: ${TextColor};
    background-color: ${WhiteColor};
    
    img{
        width: 90vw;
    }

    h2{
        color: ${RedColor};
        font-weight: bolder;
    }

    h4{
        color: ${BlackColor}
    }
 `

