import { useState } from 'react';
import InputFields from '../Input Fields/InputFields';

function Questions() {
	const [ ingredients, setIngredients ] = useState(0);
	const [ noOfRecipes, setNoOfRecipes ] = useState(0);
	const [ isInputField, setisInputField ] = useState(false);

	const results = {
		ingredients: 0,
		recipes: 0
	};

	function ingredientsFn(e) {
		const array = [];
		const value = e.target.value;
		for (let i = 0; i < value; i++) {
			array.push(i);
		}
		setIngredients(array);
	}

	function getReceipeNo(e) {
		results.recipes = e.target.value;
	}

	function getInputBoxes() {
		setisInputField(true);
	}

	console.log('questions', results);

	return (
		<div>
			<div>
				<h3>How many ingredients do you have?</h3>
				<input type="number" min="1" max="5" name="ingredients" onChange={ingredientsFn} />
				<h3>How many receipes do you want to choose from?</h3>
				<input type="number" min="1" max="5" name="recipe" onChange={getReceipeNo} />
				<button onClick={getInputBoxes}>Search</button>
			</div>
			<div>{isInputField ? <InputFields ingredients={ingredients} recipes={results.recipes} /> : <div />}</div>
		</div>
	);
}

export default Questions;
