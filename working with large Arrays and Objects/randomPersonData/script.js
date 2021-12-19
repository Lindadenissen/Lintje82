console.log(randomPersonData);
const countryList = document.querySelector('.list_group');
const list = document.querySelector('.capricorn_button')

const removeList = () => {
  while (countryList.firstChild) {
    countryList.removeChild(countryList.firstChild);
  };
}

const addCountriesToDom = () => {
  removeList();
  const setListOfCountries = randomPersonData.map((country) => country.region);
  const sortedList = [...new Set(setListOfCountries.sort ())];
  //console.log(sortedList);
  sortedList.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    countryList.appendChild(newLi);
  })
};

//addCountriesToDom();

document
  .querySelector(".country_button")
  .addEventListener("click", addCountriesToDom);


const addCapricornWomenToDom = () => {
  removeList();
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
   //console.log(nameSurname);
};
  
//addCapricornWomenToDom();

document
  .querySelector(".capricorn_button")
  .addEventListener("click", addCapricornWomenToDom);

 