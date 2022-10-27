import StoreItem from './StoreItem';
import StoreCart from './StoreCart';
import items from '../resources/items.json';

const StoreItems = () => {
	return (
		<>
			<StoreCart items={items} />
			{items.map((item) => (
				<StoreItem key={item.id} item={item} />
			))}
		</>
	);
};

export default StoreItems;
