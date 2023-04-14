console.log('Importing module');

// single import
// import {addToCart} from './shopping.js';

// multiple export and change name conventions
// import { addToCart, shoppingCost as cost, cart } from './shopping.js';
// addToCart('Apple', 5);
// addToCart('Mango', 34);
// addToCart('Watermelon', 3);
// addToCart('Grapes', 42);
// addToCart('Lichi', 25);
// console.log(cost == '10', cart);

// everything at the same time;
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('Jackfruits', 50);

// default
import add, { addToCart, shippingCost as cost, cart } from './shoppingCart.js';
add('Guava', 50);
add('Pizza', 3);
console.log(cost, cart, shoppingCart);
addToCart('Watermelon', 1);
console.log(cart);
