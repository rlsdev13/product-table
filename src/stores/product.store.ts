import { writable } from 'svelte/store';
import type { Product } from '../intefaces/product.interface';

const Products = () => {
    const { subscribe, set, update } = writable<Product []>([]);

    return{
        subscribe,
        setAll : ( products : Product[] ) => {
            set( products );
        },
        add : ( product : Product ) => {
            update( products => products = [ ...products, product ]);
        },
        remove : ( product : Product ) => {
            update( (products : Product[])  => products = products.filter( i => i.id !== product.id ));
        }
    }
}

export const productStore = Products();