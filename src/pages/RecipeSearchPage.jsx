import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer, ContainerFlexedColumn, GalleryContainer } from "../css/common-styles";
import "../css/recipeSearchPage.css"
import RecentSearch from "../components/RecentSearch"
import UsersBooks from "../components/UsersBooks";

const RecipeSearchPage = ({ 
    currentRecipeLiked, 
    setCurrentRecipeLiked, 
    jwt, searchResults, 
    setSearchResults, 
    setRecipe, 
    setIndexMemory, 
    galleryIndexMemory, 
    loggedInUser, 
    cookBookName, 
    setCookBookName

}) => {
    return (
        <PageContainer className="RecipeSearchPage">
            {!searchResults ?
                <ContainerFlexedColumn>
                    <div className="formAndBooksContainer">
                        <UsersBooks user={loggedInUser} setSearchResults={setSearchResults}/>
                        <RecipeSearchForm setSearchResults={setSearchResults} loggedInUser={loggedInUser} />
                        <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
                    </div>
                    <RecentSearch/>
                </ContainerFlexedColumn> :
                <ContainerFlexedColumn>
                    <button className="searchAgain" onClick={(e) => { setSearchResults() }}>Search Again</button>
                    <GalleryContainer>
                        <RecipeGallery jwt={jwt}
                            currentRecipeLiked={currentRecipeLiked}
                            setCurrentRecipeLiked={setCurrentRecipeLiked}
                            searchResults={searchResults}
                            setRecipe={setRecipe}
                            setIndexMemory={setIndexMemory}
                            setSearchResults={setSearchResults}
                            galleryIndexMemory={galleryIndexMemory}
                            loggedInUser={loggedInUser}
                            cookBookName={cookBookName}
                            setCookBookName={setCookBookName}
                            
                            ></RecipeGallery>
                    </GalleryContainer>
                </ContainerFlexedColumn>
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;