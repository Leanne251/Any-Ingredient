import React from 'react';
import { inputFieldWrapper } from '../Questions/Questions';
import { useContext } from 'react';
import ChakraButton from '../Button/Button';

function SearchAgain({ setisInputField }) {
	let inputField = useContext(inputFieldWrapper);

	function searchAgain() {
		inputField(false);
	}
	return (
		<div>
			<ChakraButton onClick={searchAgain} text="SearchAgain" />
			<br />
		</div>
	);
}

export default SearchAgain;
