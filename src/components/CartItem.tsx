import { IStoreItem } from './StoreCart';
import { formatCurrency } from '../util/FormatCurrency';
import { useStoreContext } from '../context/StoreContext';

interface ICartProps {
	item: IStoreItem;
	quantity: number;
}

const CartItem = ({ item, quantity }: ICartProps) => {
	const { removeFromCart } = useStoreContext();
	const IMAGE_URL = `https://dummyimage.com/210x130/${item.imageColor}`;

	return (
		<>
			<div className='store-cart__image'>
				<img src={IMAGE_URL} alt='ecommerce' />
				<button
					onClick={() => removeFromCart(item.id)}
					className='store-cart__remove'
				>
					&times;
				</button>
			</div>
			<div className='store-cart__content'>
				<div className='store-cart__details'>
					<h2>{`${item.name} x${quantity}`}</h2>
					<p>{formatCurrency((item.priceCents * quantity) / 100)}</p>
				</div>
			</div>
		</>
	);
};

export default CartItem;
