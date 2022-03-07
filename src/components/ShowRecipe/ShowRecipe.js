import React from 'react';
import SearchAgain from '../SearchAgain/SearchAgain';
import { Box, Center } from '@chakra-ui/react';

function ShowRecipe({ recipeData, setRecipeData, setisInputField }) {
	console.log(recipeData);

	let instructions = recipeData.instructions.replace(/<\/?[^>]+>/gi, '');

	function backToRecipes() {
		setRecipeData(undefined);
	}

	return (
		<div>
			<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" width="100%" boxShadow="2xl" p={3} m="15px">
				<Center>
					<h5>Your Recipe</h5>
				</Center>
			</Box>

			<Box bg="rgba(255,255,255, 0.8)" borderRadius="5" color="black" width="100%" m="15px" boxShadow="2xl">
				<Center>
					<h5>{recipeData.title}</h5>
				</Center>
				<Center>
					<img
						src={recipeData.img}
						alt={recipeData.title}
						style={{
							height: '400px',
							width: '450px',
							borderRadius: '5px'
						}}
					/>
				</Center>
				<Center>
					<p style={{ padding: '10px', width: '80%' }}>{instructions}</p>
				</Center>
			</Box>
			<Center>
				<button onClick={backToRecipes}>Back to Recipes</button>
				<SearchAgain />
			</Center>
		</div>
	);
}

export default ShowRecipe;

//useContext hook.
