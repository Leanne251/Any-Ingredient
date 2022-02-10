import React from 'react';
import { useEffect } from 'react';

function InputFields({ ingredients, recipes, noOfRecipes, searchApi }) {
	console.log(ingredients);
	console.log(recipes, 'input');

	const recipeArray = [];
	for (let i = 0; i < recipes; i++) {
		recipeArray.push(i);
	}
	console.log();

	return (
		<div>
			{ingredients.map((element, index) => {
				return <input key={index} type="text" />;
			})}
			{recipeArray.map((element, index) => {
				return <input key={index} type="text" />;
			})}
		</div>
	);
}

export default InputFields;
