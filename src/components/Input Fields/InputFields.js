import React from 'react';
import { useState } from 'react';
import Options from '../Options/Options';
import { Box, VStack, Center } from '@chakra-ui/react';
import ChakraButton from '../Button/Button';

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
			<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" width="100%" boxShadow="2xl" p={2}>
				<h5>
					<Center>What ingredients do you want to use?</Center>
				</h5>
			</Box>

			{noOfIngredients.map((element, index) => {
				return (
					<VStack>
						<Box bg="rgba(77,19,113,0.8)" borderRadius="5" color="white" width="50%">
							<input className="no-outline" key={index} name={index} type="text" onChange={getInput} />
						</Box>
					</VStack>
				);
			})}

			<Center>
				<ChakraButton text="Search" onClick={useInputs} />
			</Center>
		</div>
	) : (
		<Options returnedRecipes={returnedRecipes} />
	);
}

export default InputFields;
