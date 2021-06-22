function squared (number1, number2){
  const sum1 = number1 * number1;
  const sum2 = number2 * number2;
  const total = sum1 + sum2;
  const sum = total * total;
  return sum;
}
console.log (squared (5, 3));

const squared1 = function (number1, number2){
  const sum1 = number1 * number1;
  const sum2 = number2 * number2;
  const total = sum1 + sum2;
  const sum = total * total;
  return sum;
};
  console.log (squared1 (5, 3));

const squared2 = (number1, number2) => {
  const sum1 = number1 * number1;
  const sum2 = number2 * number2;
  const total = sum1 + sum2;
  const sum = total * total;
  return sum;
};
  console.log (squared2 (5, 3));
