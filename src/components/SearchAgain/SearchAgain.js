import React from 'react';

function SearchAgain({ setisInputField }) {
	function searchAgain() {
		setisInputField(false);
	}
	return <button onClick={searchAgain}>SearchAgain</button>;
}

export default SearchAgain;
