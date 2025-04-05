import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;
  let item1: Buyable;
  let item2: Buyable;

  beforeEach(() => {
    cart = new Cart();
    item1 = {
      id: 1,
      name: 'Item 1',
      price: 100
    };
    item2 = {
      id: 2,
      name: 'Item 2',
      price: 200
    };
  });

  test('new cart should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test('should add items to cart', () => {
    cart.add(item1);
    cart.add(item2);

    expect(cart.items.length).toBe(2);
    expect(cart.items[0]).toEqual(item1);
    expect(cart.items[1]).toEqual(item2);
  });

  test('should get total price without discount', () => {
    cart.add(item1);
    cart.add(item2);

    expect(cart.getTotalPrice()).toBe(300);
  });

  test('should get total price with discount', () => {
    cart.add(item1);
    cart.add(item2);

    expect(cart.getTotalPriceWithDiscount(10)).toBe(270);
    expect(cart.getTotalPriceWithDiscount(25)).toBe(225);
  });

  test('should get total price of empty cart', () => {
    expect(cart.getTotalPrice()).toBe(0);
    expect(cart.getTotalPriceWithDiscount(10)).toBe(0);
  });

  test('should remove item by id', () => {
    cart.add(item1);
    cart.add(item2);

    cart.removeItemById(1);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(item2);
  });

  test('should not modify cart when removing non-existent id', () => {
    cart.add(item1);

    cart.removeItemById(999);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(item1);
  });
});
