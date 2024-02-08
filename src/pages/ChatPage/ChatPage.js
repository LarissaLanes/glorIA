import React from "react";
import { DivButtonBack, DivChat, DivInputButton, DivLoading, DivMessage } from "./Styled-Chat";
import Loading from "../../components/Loading";
import buttonBack from "../../constants/assets/arrowBack.png"
import { goToFeed } from "../../rotes/Coordinator";
import { useHistory} from "react-router";
import mickIcon from "../../constants/assets/mick.svg"
import sendIcon from "../../constants/assets/Playplay.svg"

const ChatPage = () => {
  const history = useHistory()

    return (
      <DivChat>
        <DivButtonBack>
          <button onClick={() => goToFeed(history)}>
            <img src={buttonBack}  alt="botao de fechar o chat"/>
          </button>
          {/* <select></select> */}
        </DivButtonBack>
          <DivLoading>
            <Loading/>
          </DivLoading>        
        <DivInputButton>
          <input type="text" placeholder="Converse com a glorIA"  />
          <button>
            <img src={sendIcon} alt="botÃ£o enviar mensagem"/>
          </button>
          <button>
            <img src={mickIcon} alt="botÃ£o enviar audio"/>
          </button>
        </DivInputButton>
      </DivChat>
    )
}

export default ChatPage;