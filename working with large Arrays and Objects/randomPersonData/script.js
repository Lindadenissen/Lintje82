//console.log(randomPersonData);
const list = document.querySelector('.list_group');
let toggle = true;
const capricornSign = person => person.sign === Capricorn;

const removeList = () => {
  console.log(list.firstChild);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  };
}

const addCountriesToDom = () => {
  if (toggle) {
  const setListOfCountries = randomPersonData.map((country) => country.region);
  const sortedList = [...new Set(setListOfCountries.sort())];
  sortedList.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    list.appendChild(newLi);
  })
  toggle = false;
  } else {
  toggle = true;
  removeList();
  }
};

document
  .querySelector(".country_button")
  .addEventListener("click", addCountriesToDom);
  

//Capricorn assignment

const getStarSign = (day, month) => {
  if (day >= 22 && month === 12) return "Capricorn";
  if (day <= 20 && month === 1) return "Capricorn";
  return 0;
}

const setStarSign = person => {
  const day = parseInt(person.birthday.dmy.split("/")[0]);
  const month = parseInt(person.birthday.dmy.split("/")[1]);
  const sign = getStarSign(day, month);
  return sign;
 
}
const addCapricornWomenToDom = () => {
  if (toggle){
  return randomPersonData.filter(
    (person) => person.gender === "female" && person.age > 30 && setStarSign(person) === "Capricorn");
  } 
}
console.log(addCapricornWomenToDom());


  addCapricornWomenToDom.forEach((person) => {
   const newLi = document.createElement("li");
   const newImage = document.createElement("img");
   newImage.src = person.photo;
   newLi.innerHTML = person.name + " " + person.surname + " " ;
   list.appendChild(newLi);
   newLi.appendChild(newImage);
   //console.log(addCapricornWomenToDom);
});
/*
  const nameSurname = setListOfCapricorns.map(
   (person) => person.name + " " + person.surname + " ");
   nameSurname.sort();
  
  toggle = false;
  } else {
  toggle = true;
  removeList();
  }
};
*/

document
  .querySelector(".capricorn_button")
  .addEventListener("click", addCapricornWomenToDom);

 