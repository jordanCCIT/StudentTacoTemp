/*

const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random * 10 + 1)
  const isEven = number => number % 2 === 0

  isEven(randomNumber)
    ? resolve(`Your random even number is ${randomNumber}`)
    : reject(`Number returned was odd.`)
})

getEvenRandomNumberBetweenTwoAndTen
  .then(res => console.log(res))
  .catch(err => console.error(err))

*/

const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  const isEven = (number) => number % 2 === 0;

  for (let i = 0; i < 1000000000; i++) {
    1 + 1;
  }
  //   isEven(randomNumber)
  //     ? resolve(`Your random even number is ${randomNumber}`)
  //     : reject(`Number returned was odd.`);

  if (isEven(randomNumber)) {
    resolve(`Your random even number is ${randomNumber}`);
  } else {
    reject(`Nuber returned was odd.`);
  }
});

const pElement = document.querySelector(".taco-base-layer_title");
pElement.innerText = "I'm finished";

getEvenRandomNumberBetweenTwoAndTen
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
