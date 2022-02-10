import React from 'react';

function ShowRecipe({ recipeData }) {
	console.log(recipeData);

	let instructions = recipeData.instructions.replace(/<\/?[^>]+>/gi, '');

	return (
		<div>
			<h3>Your Recipe</h3>
			<h4>{recipeData.title}</h4>
			<img src={recipeData.img} alt={recipeData.title} style={{ height: '400px', width: '450px' }} />
			<p>{instructions}</p>
			<button>Back to Recipes</button>
			<button>Search Again</button>
		</div>
	);
}

export default ShowRecipe;
