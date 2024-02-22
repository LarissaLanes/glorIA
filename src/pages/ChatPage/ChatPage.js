import React, { useState, useEffect, useRef } from "react";
import { DivButtonBack, DivChat, DivInputButton, DivBoxGptMessage, DivBoxUserMessage, DivListResponseBdGpt, DivLoading, DivGpt, BtnTextoSpecth, BtnVoice, DivTexts, Bottom, DivMessageMock} from "./Styled-Chat";
import Loading from "../../components/Loading";
import buttonBack from "../../constants/assets/arrowBack.png"
import { goToFeed } from "../../rotes/Coordinator";
import { useHistory} from "react-router";
import mickIcon from "../../constants/assets/mick.svg"
import sendIcon from "../../constants/assets/send.png"
import responsesGpt from "../../pages/ChatPage/db"
import play from "../../constants/assets/Play.png"
import like from "../../constants/assets/like.png"
import deslike from "../../constants/assets/deslike.png"
import yellow from "../../constants/assets/elipseYellow.png"
import red from "../../constants/assets/elipseRed.png"
import green from "../../constants/assets/elipseGreen.png"
import speakMessage from "../../components/SpeechUtils";
import startRecording from "../../components/StartRecording";
import LoginText from "../../components/LoginText";

const ChatPage = () => {
  const history = useHistory()
  const apiKey = "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"

  const [messageCount, setMessageCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSend = async (inputMessage) => {
    if (!inputMessage && inputMessage !== "") return;

    setMessageCount(messageCount + 1);

    if (messageCount >= 2) {
      setInputMessage("");
      setDisable(true);
    }
      setLoading(true); 

     //pesquisa no BD antes de fazer a requisição para IA
     const matchedResponse = responsesGpt.find(response => response.id.toLowerCase() === inputMessage.toLowerCase());

     if (matchedResponse) {
       const newMessages = [...messages, { message: inputMessage, sender: "user" }];
       setMessages(newMessages);
       setInputMessage("");
   
       const { id, titulo, imagem, materia, materia2, materia3, data, data2, data3 } = matchedResponse;
       const responseMessage = 
       
       <DivListResponseBdGpt key={id}>
       <img src={imagem} alt={materia} />
       <p style={{color: "#555555"}}>{titulo}</p>
       <li style={{listStyle: "none"}}>
        <a style={{textDecoration: "none", color: "#C4170C" }}href={data} target="_blank" rel="noopener noreferrer">
        <p style={{color: "#C4170C"}}>{materia}</p>
       </a> 
       <a style={{textDecoration: "none", color: "#C4170C" }}href={data2} target="_blank" rel="noopener noreferrer">
        <p style={{color: "#C4170Ced"}}>{materia2}</p>
       </a>
       <a style={{textDecoration: "none", color: "#C4170C" }}href={data3} target="_blank" rel="noopener noreferrer">
        <p style={{color: "#C4170C"}}>{materia3}</p>
       </a>
       </li>
       </DivListResponseBdGpt>
 
       setMessages([...newMessages, { message: responseMessage, sender: "ChatGPT", image: imagem }]);
       setLoading(false); 

       return;
     }

    const newMessages = [...messages, { message: inputMessage, sender: "user" }];
    setMessages(newMessages);
    setInputMessage("");

    const response = await fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: newMessages.map(({ message, sender }) => `${sender}: ${message}\nGlorIA:`).join("\n"),
        max_tokens: 2048,
        temperature: 0.5,
        top_p: 1.0,
        stop: ["\n"]
      })
    });

    if (!response.ok) {
      console.error("Erro ao enviar mensagem para a API do ChatGPT");
      setLoading(false); 

      return;
    }

    const { choices } = await response.json();
    const gptResponse = choices[0].text.trim();
    setMessages([...newMessages, { message: gptResponse, sender: "ChatGPT" }]);
    setLoading(false); 
  };

    return (
      <DivChat>
        <DivButtonBack>
          <button onClick={() => goToFeed(history)}>
            <img src={buttonBack}  alt="botao de fechar o chat"/>
          </button>
        </DivButtonBack>
           <div style={{ position: "relative", height: "400vh"}} >
        {messages.map((message, i) => {
          return message.sender === "user" ? (
            <DivBoxUserMessage key={i}>{message.message}</DivBoxUserMessage>
          ) : (
            <div>
              <DivBoxGptMessage key={i}>{message.message}</DivBoxGptMessage>
              <DivGpt>
                <section>
                  <BtnTextoSpecth onClick={() => speakMessage(message.message)}>
                    <img src={play}/>
                    Ouvir
                  </BtnTextoSpecth>
                </section>
                <section>
                  <img src={like} style={{width: "15px", margin: "10px"}}/>
                  <img src={deslike} style={{width: "15px"}}/>
                  {i >= 1 && i < 2 && <img src={green} style={{width: "15px", margin: "10px"}}/>}
                  {i >= 2 && i < 3 && <img src={yellow} style={{width: "15px", margin: "10px"}}/>}
                  {i >= 3 && <img src={red} style={{width: "15px", margin: "10px"}}/>}

                  {i >= 1 && i < 2 && <p>1 de 3</p>}
                  {i >= 2 && i < 3 && <p>2 de 3</p>}
                  {i >= 3 && <p>3 de 3</p>}
                </section>
              </DivGpt>
            </div>
          );
        })}
          {loading && <DivLoading><Loading/></DivLoading>} 
      </div>
      <Bottom>
        <DivTexts>
        {disable && <LoginText></LoginText>}
        <DivMessageMock>
        <li>
          <ul>
            {disable ? (
              <> <button style={{opacity: "0.4"}}
              disabled={disable}>Ultimas do BBB 24</button>
              <button style={{ opacity: "0.4"}}
              disabled={disable}>Filmes da semana</button>
              <button style={{ opacity: "0.4"}}
              disabled={disable}>Novela</button>
              <button style={{ opacity: "0.4"}}
              disabled={disable}>Política</button>
              <button style={{ opacity: "0.4"}}
              disabled={disable}>Carnaval 2024</button>
              <button style={{ opacity: "0.4"}}
              disabled={disable}>Futebol hoje</button> </>
              ) : (
              <> <button onClick={() => handleSend("Ultimas do BBB 24")}>Ultimas do BBB 24</button>
              <button onClick={() => handleSend("Filmes da semana")}>Filmes da semana</button>
              <button onClick={() => handleSend("Novela")}>Novela</button>
              <button onClick={() => handleSend("Política")}>Política</button>
              <button onClick={() => handleSend("Carnaval 2024")}>Carnaval 2024</button>
              <button onClick={() => handleSend("Futebol hoje")}>Futebol hoje</button></>)}
          </ul>
        </li>
        </DivMessageMock>
        </DivTexts>
        <DivInputButton>
        {disable ? (
          <>
          <input
            style={{ background: "#C4170C", opacity: "0.4"}}
            disabled={disable}
            type="text"
            placeholder="Converse com a glorIA"
          />
          <button disabled={disable} style={{opacity: "0.4"}}>
          <img src={sendIcon} alt="botão enviar mensagem" />
          </button>
          <BtnVoice disabled={disable} style={{opacity: "0.4"}}>
            <img src={mickIcon} alt="botão enviar áudio" />
          </BtnVoice>
          </>
        ) : (
          <>
          <input
            type="text"
            placeholder="Converse com a glorIA"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={() => handleSend(inputMessage)}>
          <img src={sendIcon} alt="botão enviar mensagem" />
          </button>
          <BtnVoice onClick={() => startRecording(setInputMessage)}>
            <img src={mickIcon} alt="botão enviar áudio" />
          </BtnVoice>
          </>
        )}
        </DivInputButton>
      </Bottom>
      </DivChat>
    )
}

export default ChatPage;