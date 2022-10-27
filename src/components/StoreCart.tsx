import { useStoreContext } from '../context/StoreContext';
import { formatCurrency } from '../util/FormatCurrency';
import CartItem from './CartItem';

export interface IStoreItem {
	id: number;
	name: string;
	category: string;
	priceCents: number;
	imageColor: string;
}

export interface IPropsStoreItems {
	items: IStoreItem[];
}

const StoreCart = ({ items }: IPropsStoreItems) => {
	const { cartItems, toggleCart, isOpen } = useStoreContext();
	const cartElements = cartItems.map((item) => {
		const shopItem = items.find((i) => i.id === item.id);
		if (shopItem)
			return (
				<CartItem
					key={item.id}
					quantity={item.quantity}
					item={shopItem}
				/>
			);
	});
	const cartTotalCents = cartItems.reduce((sum: any, entry) => {
		const shopItem = items.find((i) => i.id === entry.id);
		if (shopItem) return sum + entry.quantity * shopItem.priceCents;
	}, 0);
	return (
		<>
			<button onClick={() => toggleCart()} className='store-cart__button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='rgb(240, 240, 240)'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
					/>
				</svg>
				<div className='store-cart__quantity'>{cartItems.length}</div>
			</button>
			{isOpen && cartItems.length > 0 && (
				<div className='store-cart__wrapper'>
					<div className='store-cart__content'>
						<div className='store-cart__container'>
							{cartElements}
						</div>
						<div className='store-cart__total'>
							<h2>TOTAL</h2>
							<h2>{formatCurrency(cartTotalCents / 100)}</h2>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default StoreCart;
