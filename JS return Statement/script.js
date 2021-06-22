/*
let biggerThenHunderd = function (number){
  if (number > 100){
    return true;
  } else {
    return false;
  }
}

console.log (biggerThenHunderd (95));
console.log (biggerThenHunderd( 125));
console.log (biggerThenHunderd(-35));
*/

/*
let enterTheClub = function (aantalBezoekers, maxBezoekers, leeftijd){
  if (leeftijd < 18){ 
    return 'je mag niet naar binnen, je bent te jong';
  }
  if (aantalBezoekers < 500){
    return 'Enjoy the party';
  } else (maxBezoekers > 500)
    return 'Helaas is het te vol, kom de volgende keer';
  }
console.log (enterTheClub (200, 500, 15));
console.log (enterTheClub (450, 500, 18));
console.log (enterTheClub (525, 500, 18));
*/

const average = function (number1, number2, number3, number4, number5){
    const total = number1 + number2 + number3 + number4+ number5;
    const average = total / 5;
    return average;
}

console.log (average (3, 5, 18, 23, 17));
