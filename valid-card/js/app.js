var cardNumber = prompt('What is your number card?');

function isValidCard (number){
  
  var arrayNumber = cardNumber,
      separateArray = arrayNumber.split('').reverse(),
      newArrayNumber = [],
      arrayForEvenNumbers = [],
      joinArrayNumbers = [],
      fromStringToEvenNumbers = [],
      sumEvenNumbers = 0,
      arrayForOddsNumbers = [],
      arrayWithAllNumbers = [],
      totalSum = 0;
  
  for (var i=0;i<separateArray.length;i++){
    newArrayNumber.push(separateArray[i]*1);
  } 
  
  for (var j=1;j<newArrayNumber.length;j+=2){
    arrayForEvenNumbers.push(newArrayNumber[j]*2);
  } 
  
  joinArrayNumbers = (arrayForEvenNumbers.join('')).split('');
  
  for (var k=0;k<joinArrayNumbers.length;k++){
    fromStringToEvenNumbers.push(joinArrayNumbers[k]*1);
  }
  
  for(l=0;l<fromStringToEvenNumbers.length;l++){
    sumEvenNumbers = sumEvenNumbers += fromStringToEvenNumbers[l];
  }
  
  for(var m=0;m<newArrayNumber.length;m+=2){
    arrayForOddsNumbers.push(newArrayNumber[m]*1);
  }
  
  arrayWithAllNumbers = arrayForOddsNumbers.concat(sumEvenNumbers);
  
  for(p=0;p<arrayWithAllNumbers.length;p++){
    totalSum = totalSum += arrayWithAllNumbers[p];
  }
  
  var result = (totalSum%10);
  
  if (result%10 === 0){
    return console.log('Your card is Valid!');
  }else{
    return console.log('Your card is Not Valid!');
  }
  
}
  

isValidCard (cardNumber);