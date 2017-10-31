var fisrtQuestion = (prompt('Do you want cipher o decipher?')).toUpperCase();

switch(fisrtQuestion){
  case "CIPHER":
    var questionSentence = (prompt('Wich is your sentence?')).toUpperCase();

    function cipher (sentenceToCipher){
      if(questionSentence === ''){
        alert('Giveme a sentence please!');
        return;
      }else{
      
      var stringToCipher = [];
      
      for (var i=0;i<sentenceToCipher.length;i++){
        var letter = String.fromCharCode((sentenceToCipher[i].charCodeAt() - 65 + 33) % 26 + 65);
        
        stringToCipher.push(letter); 
        
        var letterTogether = stringToCipher.join('');
      }
      
      return document.write(letterTogether);
      }
    }
    cipher(questionSentence);
    break;
  
  case "DECIPHER":
    
    var questionSentence2 = (prompt('Wich is your sentence?')).toUpperCase();

    function decipher (sentenceToDecipher){
          if(questionSentence2 === ''){
            alert('Giveme a sentence please!');
            return;
          }else{
          
          var stringToDecipher = [];
          
          for (var i=0;i<sentenceToDecipher.length;i++){
            var letter = String.fromCharCode((sentenceToDecipher[i].charCodeAt() + 65 - 33) % 26 + 65);
            
            stringToDecipher.push(letter); 
            
            var letterTogether = stringToDecipher.join('');
          }
          
          return document.write(letterTogether);
          }
        }
        decipher(questionSentence2);
  break;
  default:
    alert('Enter a valid option!');
  break;
}