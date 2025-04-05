import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.add(new Movie(1, 'The Avengers', 700, 2012, 'US', 'Avenger Assemble!', ['fantasy', 'action'], 8220));

console.log(cart.items);


let total = cart.getTotalPrice();
console.log( total );

let totalWithDiscount = cart.getTotalPriceWithDiscount(10);
console.log( totalWithDiscount );

cart.removeItemById(1);

total = cart.getTotalPrice();
console.log( total );
