import React, { useState } from 'react';
import InputFields from '../Input Fields/InputFields';
import { Box, Center, VStack, HStack } from '@chakra-ui/react';
import ChakraButton from '../Button/Button';

export let inputFieldWrapper = React.createContext();

function Questions() {
	const [ noOfIngredients, setnoOfIngredients ] = useState(0);
	const [ noOfRecipes, setNoOfRecipes ] = useState(0);
	const [ isInputField, setisInputField ] = useState(false);

	// tried to create an object just to hold the value of the input.
	//Then would create an array from this to map over to produce 'x' amount of input boxes.
	// but this doesnt work.
	/*
	let results = {
		ingredients: 0,
		recipes: 0
	};

	*/

	// so even though the number typed in is only used 'behind the scenes' do I still need to create a state for this?
	// here I have used the state to create the array which I can then loop through.

	function ingredientsFn(e) {
		const array = [];
		const value = e.target.value;
		for (let i = 0; i < value; i++) {
			array.push(i);
		}
		setnoOfIngredients(array);
	}

	// however... this doesn't work. The page isn't re-rendering on input (because I've not used a hook to change state?)
	//So is this why the object isn't updating either?

	/*function getReceipeNo(e) {
		results.recipes = e.target.value;
	}
	*/

	// when you have components that you don't want to be rendered at the start do you just use conditional rendering?

	function getInputBoxes() {
		if (noOfIngredients === 0 || noOfRecipes === 0) {
			alert('Please enter a number of ingredients and recipes');
			return null;
		}
		setisInputField(true);
	}

	return !isInputField ? (
		<div>
			<Center>
				<VStack>
					<Box bg="rgba(77,19,113,0.8)" borderRadius="5" color="#fff" width="100%" boxShadow="2xl">
						<h5> Find something to cook using the things you have at home...</h5>
					</Box>
					<HStack>
						<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" width="100%" boxShadow="2xl">
							<h5>How many ingredients do you have?</h5>
							<p />
						</Box>
						<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" boxShadow="2xl">
							<input className="no-outline" type="number" min="1" max="5" onChange={ingredientsFn} />
						</Box>
					</HStack>
					<HStack>
						<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" width="100%" boxShadow="2xl">
							<h5>How many receipes do you want to choose from?</h5>
						</Box>
						<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" boxShadow="2xl">
							<input
								className="no-outline"
								type="number"
								min="1"
								max="5"
								onChange={(e) => setNoOfRecipes(e.target.value)}
							/>
						</Box>
					</HStack>

					<ChakraButton text="Search" onClick={getInputBoxes} />
				</VStack>
			</Center>
		</div>
	) : (
		<div>
			<inputFieldWrapper.Provider value={setisInputField}>
				<InputFields
					noOfIngredients={noOfIngredients}
					noOfRecipes={noOfRecipes}
					/* setisInputField={setisInputField} */
				/>
			</inputFieldWrapper.Provider>
		</div>
	);
}

export default Questions;
