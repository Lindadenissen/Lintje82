
let colors1 = ['yellow', 'blue', 'red', 'orange'];
  
let x = 0;
  while (x < colors1.length){
    console.log (colors1[x]);
    x++;
  
}

let colors2 = ['yellow', 'blue', 'red', 'orange'];

for (x=0; x < colors2.length; x++){
  console.log(colors2[x]);
}


let colors = ['yellow', 'blue', 'red', 'orange'];

colors.forEach(element => console.log(element));


/*antwoorden vragen
1. for loops: 3 regels, why loops: 5 regels
2. forEach: 2 regels
3. makkelijker leesbaar, minder foutgevoelig
  forEach methode omdat het minder schrijven is en duidelijker. 
4. ja je bent uiteindelijk wel aan het itereren. 
*/

const fruit = {
  apple: 28,
  orange: 17, 
  pear: 54
};

const entries = Object.entries (fruit)
console.log (entries);

for (const [fruit, count] of entries){
  console.log ("Er zijn ${index} ${fruit}s");
}

