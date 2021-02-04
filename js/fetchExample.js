fetch("http://taco-randomizer.herokuapp.com/random/")
  .then((response) => response.json())
  .then((jsonData) => console.log(jsonData))
  .catch((err) => console.log(err));
