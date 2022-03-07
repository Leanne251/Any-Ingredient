import Questions from '../Questions/Questions';
import './App.css';
import { Center } from '@chakra-ui/react';

function App() {
	return (
		<Center>
			<Questions />;
		</Center>
	);
}

export default App;

//wrapper around questions, wrapper of components around and pass avalue into this, and components that wants to acess the value in the wrapper.
// passing down dispatch and and state in an object.
