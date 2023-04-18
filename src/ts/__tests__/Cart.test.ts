import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add movie to Cart', () => {
  const cart = new Cart;
  cart.add(new Movie(20, 'Мстители', 500, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./ 02:17'));
  const movie = [{
    id: 20,
    name: 'Мстители',
    price: 500,
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    time: '137 мин./ 02:17'
  }];
  expect(cart.items).toEqual(movie);
});

test('cart total price', () => {
  const cart = new Cart;
  cart.add(new Movie(20, 'Мстители', 500, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./ 02:17'));
  cart.add(new Book(15, 'War and Peace', 'Leo Tolstoy', 2000, 960));
  expect(cart.sumPrice(cart.items)).toEqual(2500);

})