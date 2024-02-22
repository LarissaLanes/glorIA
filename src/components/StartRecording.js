const startRecording = (setInputMessage) => {
    if ('webkitSpeechRecognition' in window) {
      let recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'pt-BR'; 
  
      recognition.onresult = function(event) {
        if (event.results.length > 0) {
          setInputMessage(event.results[0][0].transcript);
        }
      };
  
      recognition.start();
    } else {
      console.error('Speech recognition not supported in this browser');
    }
  };
  
  export default startRecording;
  