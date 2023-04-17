function generateJoke() {
  return "Why did the tomato turn red? Because it saw the salad dressing!";
}

export default generateJoke;

const countAge = (name, age) => {
  let date = new Date();
  const currentAge = date.getFullYear();
  return `${name} is ${currentAge - age} old now;`;
};

const greet = (person) => {
  return `Welcome Mr. ${person}`;
};

export { countAge, greet };

console.log("I am from generateText function");
