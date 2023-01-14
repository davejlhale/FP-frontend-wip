import { PageContainer } from "../css/common-styles"
import React from 'react';
import IngredientList from "../components/RecipeInfoPage/IngredientList/IngredientList";
import NutritionalList from "../components/RecipeInfoPage/NutritionalList/NutritionalList";
import RecipieImage from "../components/RecipeInfoPage/RecipeImage/RecipeImage";
import RecipeInfoPageAction from "../components/RecipeInfoPage/RecipeInfoPageActionContainer/RecipeInfoPageAction"

const RecipeInfoPage = ({ data }) => {
    console.log("inside recipieinfopage");
    console.debug(data);
    const images = data.recipe.images;
    // const ingredients = data.recipe.ingredients;
    // const totalDaily = data.recipe.totalDaily;
    // const totalNutrients = data.recipe.totalNutrients;
    const digest = data.recipe.digest;
    const cautions = data.recipe.cautions;
    // const calories = data.recipe.calories;
    const cuisineType = data.recipe.cuisineType;
    const dishType = data.recipe.dishType;
    // const healthLabels = data.recipe.healthLabels
    const ingLines = data.recipe.ingredientLines;
    const timeToPlate = data.recipe.totalTime;
    const serves = data.recipe.yield;
    const mealType = data.recipe.mealType;
    //theres still more

    return (
        <PageContainer id="recipeInfoPage">
            <h2>{data.recipe.label}</h2>
            <RecipieImage data={images}></RecipieImage>
            <IngredientList data={ingLines} cautions={cautions}></IngredientList>
            <RecipeInfoPageAction
                timeToPlate={timeToPlate}
                cuisineType={cuisineType}
                dishType={dishType}
                mealType={mealType}
                serves={serves}>
            </RecipeInfoPageAction>
            <NutritionalList data={digest}></NutritionalList>
        </PageContainer>
    );
};
export default RecipeInfoPage;