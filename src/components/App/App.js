import Questions from '../Questions/Questions';
import './App.css';
import { Box, Center } from '@chakra-ui/react';

function App() {
	return (
		<Center>
			<Box bg="rgba(255,255,225,0.2)" borderRadius="5" width="60%">
				<Questions />;
			</Box>
		</Center>
	);
}

export default App;

//wrapper around questions, wrapper of components around and pass avalue into this, and components that wants to acess the value in the wrapper.
// passing down dispatch and and state in an object.
