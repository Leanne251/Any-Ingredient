import { useState } from 'react';
import InputFields from '../Input Fields/InputFields';

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
		setisInputField(true);
	}

	return !isInputField ? (
		<div>
			<h3>How many ingredients do you have?</h3>
			<input type="number" min="1" max="5" name="ingredients" onChange={ingredientsFn} />
			<h3>How many receipes do you want to choose from?</h3>
			<input type="number" min="1" max="5" name="recipe" onChange={(e) => setNoOfRecipes(e.target.value)} />
			<button onClick={getInputBoxes}>Search</button>
		</div>
	) : (
		<div>
			<InputFields noOfIngredients={noOfIngredients} noOfRecipes={noOfRecipes} />
		</div>
	);
}

export default Questions;
