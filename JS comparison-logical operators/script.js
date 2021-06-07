// deel 1 if-else
const age = '17';

if (age >= 18){

  console.log ('Deze persoon mag naar binnen');

} else{

  console.log ('Deze persoon mag helaas nog niet naar binnen en wordt verzocht het gebouw te verlaten');
}


//deel 2 if-else
const isFemale = true;

if (isFemale) {

  console.log ('laat deze mooie vrouw binnen');

    }else{

  console.log ('helaas mag deze mooie vrouw niet naar binnen');
}


//deel 3 if-else 
const driverStatus = 'bob'; 

if (driverStatus == 'bob'){

  console.log ('deze persoon is bob en mag rijden');

    } else{

  console.log ('Deze persoon is geen bob en mag niet rijden');
}
//comparison && logical operators deel 1
let myAge = 35;

if (myAge >= 18 && myAge <= 25){

  console.log ('Je krijgt 50% korting!')
} else {

  console.log ('Je krijgt helaas geen korting')
}

//comparison && logical operators deel 2
const firstName = 'Fred';

if (firstName == 'Bram' || firstName == 'Sarah') {

  console.log ('Gefeliciteerd!!! Je krijgt een gratis biertje');
} else {

  console.log ('Helaas geen gratis biertje');
}

//comparison && logical operators deel 3
const totalAmount = 75;

if (totalAmount >= 25 && totalAmount <= 50) {

    console.log ('Gefeliciteerd! Je ontvangt gratis (vega)bitterballen');

} else if (totalAmount > 50 && totalAmount < 100) {

    console.log ('Gefeliciteerd! Je krijgt een gratis portie nachos');

} else if (totalAmount >= 100) {

    console.log ('Gefeliciteerd! Je ontvangt een gratis fles champagne');
}


 


















/*
// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";


Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 808; 


if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}
*/
