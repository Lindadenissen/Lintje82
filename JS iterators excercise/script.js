let naam = prompt ('Welkom! Wat is je naam?');
  alert('Hallo ' + naam + ',' + ' laten we een spelletje spelen!');

  const randomNumber = Math.floor(Math.random() * 26);
  let counter = 0;
  const maxTries = 5;

    let getal = prompt ('Typ een getal tussen de 0 - 25 en raad mijn getal, je hebt totaal 5 kansen');

 while(maxTries != randomNumber){
    counter ++;
   
  if (counter >= maxTries){
      alert ('Helaas heb je het getal niet geraden. Probeer het nog een keer!');
      break;
    } 
 
  if (getal < randomNumber){
    getal = prompt ('Dit getal is te laag, probeer het nog een keer');
  } else if (getal > randomNumber){ 
    getal = prompt ('Dit getal is te hoog, probeer het nog een keer');
  } else if (getal == randomNumber){
    alert ('Gefeliciteerd, je hebt het getal geraden');
    alert ('Het juiste antwoord was ' + randomNumber);
    break;
  }
 }
alert ('Dag ' + naam + '. Tot de volgende keer!');

