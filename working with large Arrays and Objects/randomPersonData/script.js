console.log(randomPersonData);
const list = document.querySelector('.list_group');

let toggle = true;

const removeList = () => {
  console.log(list.firstChild);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  };
}

const addCountriesToDom = () => {
  console.log("hello world");
  if (toggle){
  const setListOfCountries = randomPersonData.map((country) => country.region);
  const sortedList = [...new Set(setListOfCountries.sort())];
  sortedList.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    list.appendChild(newLi);
  })
  toggle = false;
  } else {
  removeList();
  toggle = true;
  }
};

document
  .querySelector(".country_button")
  .addEventListener("click", addCountriesToDom);
  

//Capricorn assignment
const addCapricornWomenToDom = () => {
  if (toggle){
  const setListOfCapricorns = randomPersonData.filter(
    (person) => person.gender === "female" && person.age > 30);
 
  setListOfCapricorns.forEach((person) => {
   const newLi = document.createElement("li");
   const newImage = document.createElement("img");
   newImage.src = person.photo;
   newLi.innerHTML = person.name + " " + person.surname + " ";
   list.appendChild(newLi);
   newLi.appendChild(newImage);
});

  const nameSurname = setListOfCapricorns.map(
   (person) => person.name + " " + person.surname + " ");
   nameSurname.sort();
   toggle = false;
  } else {
    console.log("test");
    removeList();
    toggle = true;
  }
};
  
document
  .querySelector(".capricorn_button")
  .addEventListener("click", addCapricornWomenToDom);

 