// For a module file; it also a convention that it follows camelCase;
console.log('Exporting Module');
const shippingCost = 10;
let cart = [];

const addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to the cart`);
};

// addToCart('Apple', 5);
// addToCart('Mango', 34);
// addToCart('Watermelon', 3);
// addToCart('Grapes', 42);
// addToCart('Lichi', 25);
// cart.forEach(i => console.log(i));

// One export
// => export const sayHell = func(){}

// Multiple export; =>
export { shippingCost, cart, addToCart };

// How to change name convention
// => export { shippingCost as cost, cart, addToCart as buyCart };

// exporting as default ; here we don't need to declare variables;

export default function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to the cart`);
}
