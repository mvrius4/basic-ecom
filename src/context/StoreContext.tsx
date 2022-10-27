import {
	useState,
	createContext,
	useContext,
	ReactNode,
	useEffect,
} from 'react';

interface IStoreContext {
	addToCart: (id: number) => void;
	removeFromCart: (id: number) => void;
	toggleCart: () => void;
	cartItems: ICartItem[];
	isOpen: boolean;
}
export interface ICartItem {
	id: number;
	quantity: number;
}
interface StoreProviderProps {
	children: ReactNode;
}

const LOCAL_STORAGE_KEY = 'shopping-cart-items';
const StoreContext = createContext({} as IStoreContext);

export const useStoreContext = () => {
	return useContext(StoreContext);
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const [cartItems, setCartItems] = useState<ICartItem[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(true || false);

	useEffect(() => {
		const items = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (items != null) setCartItems(JSON.parse(items));
		console.log(cartItems);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
	}, [cartItems]);

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
		setIsOpen(true);
	};

	const removeFromCart = (id: number) => {
		const filteredItems = cartItems.filter((item) => item.id !== id);
		console.log(filteredItems);
		setCartItems(filteredItems);
	};

	const toggleCart = () => {
		if (isOpen) setIsOpen(false);
		else setIsOpen(true);
	};

	return (
		<StoreContext.Provider
			value={{ addToCart, removeFromCart, cartItems, toggleCart, isOpen }}
		>
			{children}
		</StoreContext.Provider>
	);
};
