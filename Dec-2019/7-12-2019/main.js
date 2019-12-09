const fruitObject = {
  banana: "yellow",
  apple: "green",
  pineapple: "yellow"
};

console.log(fruitObject);
const { banana } = fruitObject;
console.log(banana);
const { apple } = fruitObject;
console.log(apple);
const { pineapple } = fruitObject;
console.log(pineapple);

const color = [apple, banana, pineapple];
console.log(color.reverse());
