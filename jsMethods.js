let person = {
  name: "Lilian",
  age: 25,
};

person.message = function greet() {
  console.log("Hi");
};

console.log(person);

person.message();
