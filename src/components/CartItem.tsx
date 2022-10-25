import { IStoreItem } from './StoreCart';

const CartItem = ({ item }: { item: IStoreItem }) => {
	console.log(item);
	return (
		<div className='store-cart__wrapper'>
			<div className='store-cart__content'>
				<div className='store-cart__container'>{item.name}</div>
				<span>Total $0.00</span>
			</div>
		</div>
	);
};

export default CartItem;
