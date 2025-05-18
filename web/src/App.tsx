import './App.css';
import TopNavigationBar from './components/layout/TopNavigationBar';
import Router from './routes/Router';


function App() {
	return (
		<div className='font-bai'>
			<TopNavigationBar />
			<main>
				<Router />
			</main>
		</div>
	);
}

export default App;
