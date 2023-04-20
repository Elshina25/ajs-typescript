import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(values: any): number {
      return this.items.reduce((acc, value) => {
            return acc + value.price;
       }, 0);
    }

    sumPriceWithSale(sale: number): number {
        const sum = this.items.reduce((acc, value) => {
            return (acc + value.price);
       }, 0);
       return sum - (sum * sale / 100);
    }

    removeItem(id: number): Buyable[] {
      return this.items.filter(item => item.id !== id);
     }
}