const speakMessage = (message) => {
    let speech = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    speech.text = message;
    window.speechSynthesis.speak(speech);
};

export default speakMessage;