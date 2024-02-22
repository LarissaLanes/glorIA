import styled from "styled-components";
import { BackgroundChatColor, BlackColor, RedColor, TextColor, WhiteColor } from "../../constants/colors/Colors";

export const DivFeed = styled.div`
    display: flex;
    justify-content: center ;
    width: 100vw;
    height: 100vh;
    background-color: ${BackgroundChatColor};
`
export const DivHeader = styled.div`
    display: flex;
    align-items:center;
    height:15vh;
    width: 100%;
    position:fixed;
    margin: 0;
`
export const DivListPost = styled.div`
    width: 100vw;
    margin-top: 15vh;
    overflow: auto;
    max-height: 100vh;
`
export const Posts = styled.div`
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

