import StoreItems from './components/StoreItems';
import { StoreProvider } from './context/StoreContext';
import './App.css';

function App() {
	return (
		<StoreProvider>
			<div className='store'>
				<StoreItems />
			</div>
		</StoreProvider>
	);
}

export default App;
