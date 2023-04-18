import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(values: Buyable[]): number {
       const priceArray = [...values].map(value => value.price);
       const sum = priceArray.reduce((acc, value) => {
            return acc + value;
       }, 0);

       return sum;
    }
}