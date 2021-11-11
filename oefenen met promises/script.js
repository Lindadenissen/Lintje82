//oefening 1

const testNum = (num) => {
  return new Promise ((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than 10');
    } else {
      reject(num + ' is less than 10');
    }
  })
};

testNum(5)
.then(result => console.log(result))
.catch(error => console.log(error));

testNum(13)
.then(result => console.log(result))
.catch(error => console.log(error));


//oefening 2
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      resolve()
    )}
    toUppercase(words)
    
    } else {
      reject('Not a string!');
    }

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then(result => console.log(result))
  .catch(error => console.log(error));