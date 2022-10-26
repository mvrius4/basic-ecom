import { IStoreItem } from './StoreCart';
import { formatCurrency } from '../util/FormatCurrency';
import { useStoreContext } from '../context/StoreContext';

const StoreItem = ({ item }: { item: IStoreItem }) => {
	const IMAGE_URL = `https://dummyimage.com/210x130/${item.imageColor}`;
	const { addToCart, removeFromCart, cartItems } = useStoreContext();

	return (
		<div key={item.id} className='store-item'>
			<div className='store-item__image'>
				<img src={IMAGE_URL} alt='ecommerce' />
			</div>
			<div className='store-item__content'>
				<div className='store-item__details'>
					<h3>{item.category}</h3>
					<h2>{item.name}</h2>
					<p>{formatCurrency(item.priceCents / 100)}</p>
				</div>
				<button onClick={() => console.log(cartItems)}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default StoreItem;
