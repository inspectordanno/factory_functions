//factory 1

const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

//factory 2

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

//factory 3

const dog = () => {
  const sound = 'woof';
  return {
    talk: () => console.log(sound);
  };
};
const sniffles = dog();
sniffles.talk();
