import React from 'react';
import MainContainer from '../components/UI/MainContainer';
import NewRecipe from '../components/NewRecipe/NewRecipe';
import NavBar from '../components/NavBar';

const NewRecipePage = () => {
  return (
    <MainContainer>
      <NavBar />
      <NewRecipe />
    </MainContainer>
  );
};

export default NewRecipePage;
