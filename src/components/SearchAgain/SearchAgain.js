import React from 'react';
import { inputFieldWrapper } from '../Questions/Questions';
import { useContext } from 'react';

function SearchAgain({ setisInputField }) {
	let inputField = useContext(inputFieldWrapper);

	function searchAgain() {
		inputField(false);
	}
	return <button onClick={searchAgain}>SearchAgain</button>;
}

export default SearchAgain;
