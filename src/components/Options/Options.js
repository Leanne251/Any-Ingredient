import { useState } from 'react';
import SearchAgain from '../SearchAgain/SearchAgain';
import ShowRecipe from '../ShowRecipe/ShowRecipe';

import { Box, Center, VStack } from '@chakra-ui/react';

function Options({ returnedRecipes, setisInputField }) {
	const [ recipeData, setRecipeData ] = useState();

	function displayRecipe(e) {
		console.log(e);
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
			<Center>
				<VStack>
					<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" width="100% " color="black">
						<h5>We've found some recipes... Which would you like to cook? </h5>
					</Box>
					{returnedRecipes.map((element) => (
						<button key={element.id} id={element.id} onClick={displayRecipe}>
							{element.title}
						</button>
					))}
					<SearchAgain />
				</VStack>
			</Center>
		</div>
	) : (
		<ShowRecipe recipeData={recipeData} setRecipeData={setRecipeData} />
	);
}

export default Options;
