import React from 'react';
import { useState } from 'react';
import Options from '../Options/Options';

function InputFields({ noOfIngredients, noOfRecipes, setisInputField }) {
	const [ input, setInput ] = useState([]);
	const [ returnedRecipes, setReturnedRecipes ] = useState();

	// this is always updating, but the value is writing over itself in the object as the object can only have one unique key value.

	function getInput(e) {
		let value = e.target.value;
		setInput({ ...input, [e.target.name]: value });
	}

	function useInputs() {
		let joinedInputs = '';
		const inputArray = Object.values(input);
		for (let i = 0; i < inputArray.length; i++) {
			joinedInputs += inputArray[i] + ',+$';
		}
		let searchTerm = joinedInputs.substring(0, joinedInputs.length - 3);
		searchAPI(searchTerm);
	}

	async function searchAPI(searchTerm) {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&number=${noOfRecipes}&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		console.log('data', data);
		setReturnedRecipes(data);
	}

	// just practising again to see if the object data would update
	/*const results = {
		recipe: 0
	};
	results.recipe = 1;
	console.log('recipe', results.recipe);

	function inputfill(e) {
		console.log('ee', e.target.value);
		results.recipe = e.target.value(console.log(results.recipe));
	} */

	return returnedRecipes === undefined ? (
		<div>
			{/*<input type="number" onChange={inputfill} />*/}
			<p>What ingredients do you want to use?</p>
			{noOfIngredients.map((element, index) => {
				return <input key={index} name={index} type="text" onChange={getInput} />;
			})}

			<button onClick={useInputs}>Search</button>
		</div>
	) : (
		<Options returnedRecipes={returnedRecipes} setisInputField={setisInputField} />
	);
}

export default InputFields;
