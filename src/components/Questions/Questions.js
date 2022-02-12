import React, { useReducer, useState, useRef } from 'react';
import InputFields from '../Input Fields/InputFields';

export let inputFieldWrapper = React.createContext();

function Questions() {
	const [ noOfIngredients, setnoOfIngredients ] = useState(0);
	const [ noOfRecipes, setNoOfRecipes ] = useState(0);
	const [ isInputField, setisInputField ] = useState(false);

	let initState = {
		ingredientQuestion: 0,
		recipeQuestion: 0
	};

	let ACTIONS = {
		GET_NUMBERS: 'GET_NUMBERS',
		GETRECIPES: 'GETRECIPES'
	};

	function reduce(state, action) {
		switch (action.type) {
			case ACTIONS.GETINGREDIENTS:
				return { ...state, ingredientQuestion: action.payload };

			default:
				break;
		}
	}

	const [ state, dispatch ] = useReducer(reduce, initState);

	let ingredientsNo = useRef('');
	console.log(initState);

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
			<input type="number" min="1" max="5" ref="ingredientsNo" onChange={ingredientsFn} />

			<h3>How many receipes do you want to choose from?</h3>
			<input type="number" min="1" max="5" name="recipe" onChange={(e) => setNoOfRecipes(e.target.value)} />
			<button onClick={() => dispatch({ type: ACTIONS.GET_NUMBERS, payload: ingredientsNo.current.value })}>
				Search
			</button>

			<input type="text" ref={myInputField} />
			<button onClick={() => dispatch({ type: ACTIONS.GETINGREDIENTS, payload: myInputField.current.value })}>
				Get Inputs
			</button>
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
