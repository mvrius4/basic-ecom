import { useState, createContext, useContext, ReactNode } from 'react';
import CartItem from '../components/CartItem';
import items from '../resources/items.json';

interface StoreContext {
	addToCart: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartItems: CartItem[];
}
interface CartItem {
	id: number;
	quantity: number;
}
type ContextProvider = {
	children: ReactNode;
};

const StoreContext = createContext({} as StoreContext);

export const useStoreContext = () => {
	return useContext(StoreContext);
};

export const storeProvider = ({ children }: ContextProvider) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const addToCart = (id: number) => {
		setCartItems((currentItems) => {
			if (cartItems.find((item) => item.id === id)) {
				return currentItems.map((item) => {
					if (item.id === id)
						return { ...item, quantity: item.quantity + 1 };
					else return item;
				});
			} else {
				return [...currentItems, { id, quantity: 1 }];
			}
		});
		cartItems.forEach((item) => {
			const shopItem = items.find((i) => i.id === item.id);

			console.log(shopItem);
			// render every item in cart
		});
	};

	const removeFromCart = (id: number) => {
		const filteredItems = cartItems.filter((item) => item.id !== id);
		console.log(filteredItems);
		setCartItems(filteredItems);
	};

	return (
		<StoreContext.Provider value={{ addToCart, removeFromCart, cartItems }}>
			{children}
		</StoreContext.Provider>
	);
};
