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

test('cart total amount', () => {
  const cart = new Cart;
  cart.add(new Movie(20, 'Мстители', 500, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./ 02:17'));
  cart.add(new Book(15, 'War and Peace', 'Leo Tolstoy', 2000, 960));
  expect(cart.sumPrice()).toEqual(2500);
});

test ('cart total amount with sale', () => {
  const cart = new Cart;
  cart.add(new Movie(20, 'Мстители', 500, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./ 02:17'));
  cart.add(new Book(15, 'War and Peace', 'Leo Tolstoy', 2000, 960));
  cart.add(new Book(10, 'Rich dad, poor dad', 'Robert Kiyosaki', 1500, 336));
  expect(cart.sumPriceWithSale(30)).toEqual(2800);
})

test('remove item.id from cart', () => {
  const cart = new Cart;
  cart.add(new Movie(20, 'Мстители', 500, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./ 02:17'));
  cart.add(new Book(15, 'War and Peace', 'Leo Tolstoy', 2000, 960));
  cart.add(new Book(10, 'Rich dad, poor dad', 'Robert Kiyosaki', 1500, 336));
  expect(cart.removeItem(20)).toEqual([{
    id: 15,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 2000,
    pages: 960
  }, 
  {
    id: 10,
    name: 'Rich dad, poor dad',
    author: 'Robert Kiyosaki',
    price: 1500,
    pages: 336
  }])
})