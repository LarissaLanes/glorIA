import styled from "styled-components"
import {WhiteColor, BackgroundChatColor, TextColor} from "../../constants/colors/Colors"

export const DivHeader = styled.div`
    display: grid;
    align-items:center;
    height:15vh;
    width: 100%;
    position:fixed;
    background-color: ${WhiteColor};
    margin: 0;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); 
`
export const DivNavBar = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 1rem;
   
    img{
        height: 2rem;
    }

    button{
        background: transparent;
        border: none;
        
        
    }
`

export const DivScroolButton = styled.div`
    border-top: solid 1px ${BackgroundChatColor};
    display: flex;
    padding: 0.5rem;
    justify-content:center;
    overflow: auto;

    li{
        list-style:none;

        ul{
            padding: 0;
            margin: 0;

            button{
                background: transparent;
                border: none;
                color:  ${TextColor};
                // font-size: 0.875rem;
            }
        }
    }
   
    
    
 
  
    
    
`