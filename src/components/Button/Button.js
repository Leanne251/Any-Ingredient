import React from 'react';
import { Button } from '@chakra-ui/react';

function ChakraButton({ onClick, text }) {
	return (
		<Button
			bg="rgba(77,19,113,0.8)"
			size="lg"
			p={10}
			borderRadius="5"
			color="white"
			fontSize="25px"
			boxShadow="2xl"
			onClick={onClick}
		>
			{text}
		</Button>
	);
}

export default ChakraButton;
