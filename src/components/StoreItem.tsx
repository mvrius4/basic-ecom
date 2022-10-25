import { IStoreItem } from './StoreCart';

const StoreItem = ({ item }: { item: IStoreItem }) => {
	const IMAGE_URL = `https://dummyimage.com/210x130/${item.imageColor}`;

	return (
		<div key={item.id} className='store-item'>
			<div className='store-item__image'>
				<img src={IMAGE_URL} alt='ecommerce' />
			</div>
			<div className='store-item__content'>
				<div className='store-item__details'>
					<h3>{item.category}</h3>
					<h2>{item.name}</h2>
					<p>{item.priceCents}</p>
				</div>
				<button>Add To Cart</button>
			</div>
		</div>
	);
};

export default StoreItem;
