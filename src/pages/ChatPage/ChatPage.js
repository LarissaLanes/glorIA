import React, { useState } from "react";
import { DivButtonBack, DivChat, DivInputButton, DivBoxGptMessage, DivBoxUserMessage, DivListResponseBdGpt, DivLoading, DivGpt, BtnTextoSpecth, BtnVoice} from "./Styled-Chat";
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

const ChatPage = () => {
  const history = useHistory()
  const apiKey = "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"

  const [messages, setMessages] = useState([
    {
      message: "Olá, eu sou a GlorIA! Como posso te ajudar hoje?",
      sender: "ChatGPT"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar a exibição da tela de loading


  const handleSend = async () => {
    if (inputMessage.trim() === "") {
      return;
    }

    setLoading(true); // Mostrar tela de loading


     //mensagem do banco de dados(faz o if e se nao encontrar mensagem no banco de dados enviar pra api)
     const matchedResponse = responsesGpt.find(response => response.id.toLowerCase() === inputMessage.toLowerCase());

     if (matchedResponse) {
       // Se corresponder, usar o conteúdo da resposta como mensagem
       const newMessages = [...messages, { message: inputMessage, sender: "user" }];
       setMessages(newMessages);
       setInputMessage("");
   
       const { id, imagem, materia, data } = matchedResponse;
       const responseMessage = 
       
       <DivListResponseBdGpt key={id}>
       <img src={imagem} alt={id} />
       <p>{materia}</p>
       <h5>{data}</h5>
       </DivListResponseBdGpt>
 
       setMessages([...newMessages, { message: responseMessage, sender: "ChatGPT", image: imagem }]);
       setLoading(false); // Esconder tela de loading

       return;
     }
     //

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
      setLoading(false); // Esconder tela de loading

      return;
    }

    const { choices } = await response.json();
    const gptResponse = choices[0].text.trim();
    setMessages([...newMessages, { message: gptResponse, sender: "ChatGPT" }]);
    setLoading(false); // Esconder tela de loading

  };

  // ChatPage.js
  // const startRecording = () => {
  //   if ('webkitSpeechRecognition' in window) {
  //     let recognition = new window.webkitSpeechRecognition();
  //     recognition.lang = 'pt-BR'; // Defina o idioma desejado
  
  //     recognition.onresult = function(event) {
  //       if (event.results.length > 0) {
  //         setInputMessage(event.results[0][0].transcript);
  //       }
  //     };
  
  //     recognition.start();
  //   } else {
  //     console.error('Speech recognition not supported in this browser');
  //   }
  // };




    return (
      <DivChat>
        <DivButtonBack>
          <button onClick={() => goToFeed(history)}>
            <img src={buttonBack}  alt="botao de fechar o chat"/>
          </button>
          {/* <select></select> */}
        </DivButtonBack>
              
           <div style={{ position: "relative", height: "200vh"}}>
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
                  <img src={yellow} style={{width: "15px", margin: "10px"}}/>
                  <p>4 de 4</p>
                </section>
              </DivGpt>
            </div>
            
             
          );
        })}
          {loading && <DivLoading><Loading/></DivLoading>} {/* Mostrar tela de loading se o estado 'loading' for true */}

      </div>
     
      <DivInputButton>
        <input
          type="text"
          placeholder="Converse com a GlorIA"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSend} >
          <img src={sendIcon} alt="botão enviar mensagem" />
        </button>
        <BtnVoice onClick={() => startRecording(setInputMessage)}>
          <img src={mickIcon} alt="botão enviar áudio"/>
        </BtnVoice>
      </DivInputButton>
      </DivChat>
    )
}

export default ChatPage;