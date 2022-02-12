import { useState } from 'react';
import SearchAgain from '../SearchAgain/SearchAgain';
import ShowRecipe from '../ShowRecipe/ShowRecipe';

function Options({ returnedRecipes, setisInputField }) {
	const [ recipeData, setRecipeData ] = useState();

	function displayRecipe(e) {
		const id = e.target.id;
		getRecipe(id);
	}

	async function getRecipe(id) {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		const requiredData = { title: data.title, img: data.image, instructions: data.instructions };
		setRecipeData(requiredData);
	}

	return recipeData === undefined ? (
		<div>
			<h3>Choose a Recipe</h3>
			{returnedRecipes.map((element) => (
				<button key={element.id} id={element.id} onClick={displayRecipe}>
					{element.title}
				</button>
			))}
			<SearchAgain />
		</div>
	) : (
		<ShowRecipe recipeData={recipeData} setRecipeData={setRecipeData} />
	);
}

export default Options;
