console.log("This is webpack app");
import generateJoke, { countAge, greet } from "./generateText";
console.log(generateJoke());
console.log(greet("Mamun Sj"));
console.log(countAge("Mamun Sj", 1999));
import { v4 } from "uuid";
console.log(v4());

class App {
  constructor(name, cg, dept, birthDate) {
    this.name = name;
    this.cg = cg;
    this.dept = dept;
    this.birthDate = birthDate;
  }
  getAge() {
    return new Date().getFullYear() - this.birthDate;
  }
}

const personOne = new App("Mamun Sj", 3.33, "Arabic", 1999);
console.log(personOne);
console.log(personOne.getAge());
