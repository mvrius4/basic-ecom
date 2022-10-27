import { useState, createContext, useContext, ReactNode } from 'react';
import CartItem from '../components/CartItem';
import items from '../resources/items.json';

interface IStoreContext {
	addToCart: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartItems: ICartItem[];
}
export interface ICartItem {
	id: number;
	quantity: number;
}
interface StoreProviderProps {
	children: ReactNode;
}

const StoreContext = createContext({} as IStoreContext);

export const useStoreContext = () => {
	return useContext(StoreContext);
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const [cartItems, setCartItems] = useState<ICartItem[]>([]);

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
