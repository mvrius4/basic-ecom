import StoreItem from './StoreItem';
import StoreCart from './StoreCart';
import items from '../resources/items.json';

const StoreItems = () => {
	return (
		<>
			<StoreCart />
			{items.map((item) => (
				<StoreItem item={item} />
			))}
		</>
	);
};

export default StoreItems;
