// Text-to-Speech
export const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
  };
  
  // Speech-to-Text
  export const listenForSpeech = () => {
    return new Promise((resolve, reject) => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
  
      recognition.start();
  
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        resolve(speechResult);
      };
  
      recognition.onerror = (event) => {
        reject('Error occurred in speech recognition: ' + event.error);
      };
    });
  };
  