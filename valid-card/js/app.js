var cardNumber = prompt('Wich is your number card?');

function isValidCard (number){
  
  var arrayNumber = cardNumber;
  var separateArray = arrayNumber.split('').reverse();
  var newArrayNumber = [];
  var arrayForEvenNumbers=[];
  var arrayForOddsNumbers = [];
  var arrayWithAllNumbers = [];
  var sum = 0;
  
  for (var i=0;i<separateArray.length;i++){
    newArrayNumber.push(separateArray[i]);
    
  }
  
  for (var j=1;j<newArrayNumber.length;j+=2){
    arrayForEvenNumbers.push(newArrayNumber[j]*2);
    
    
  }
  
  for(var k=0;k<newArrayNumber.length;k+=2){
    arrayForOddsNumbers.push(newArrayNumber[k]*1);
    
  }  
  
  
  arrayWithAllNumbers = arrayForOddsNumbers.concat(arrayForEvenNumbers);
  
  for(l=0;l<arrayWithAllNumbers.length;l++){
    sum = sum += arrayWithAllNumbers[l];
  }
  
  var result = sum;
  
  //console.log(sum%10);
  
  if (result%10 === 0){
    return console.log('Your card is Valid!')
  }else{
    return console.log('Your card is Not Valid!')
  }
  
  
}


isValidCard (cardNumber);