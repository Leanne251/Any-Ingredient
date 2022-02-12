import React from 'react';
import SearchAgain from '../SearchAgain/SearchAgain';

function ShowRecipe({ recipeData, setRecipeData, setisInputField }) {
	console.log(recipeData);

	let instructions = recipeData.instructions.replace(/<\/?[^>]+>/gi, '');

	function backToRecipes() {
		setRecipeData(undefined);
	}

	return (
		<div>
			<h3>Your Recipe</h3>
			<h4>{recipeData.title}</h4>
			<img src={recipeData.img} alt={recipeData.title} style={{ height: '400px', width: '450px' }} />
			<p>{instructions}</p>
			<button onClick={backToRecipes}>Back to Recipes</button>
			<SearchAgain />
		</div>
	);
}

export default ShowRecipe;

//useContext hook.
