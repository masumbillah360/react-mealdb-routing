import React from 'react';

const SearchedMeal = ({meal}) => {
    const {strMeal, strCategory, strArea, strMealThumb, strIngredient1, strInstructions} = meal;
    return (
        <div className='border-2 p-2 rounded'>
            <img className='mx-auto' src={strMealThumb} alt="" />
            <h1 className='font-bold text-xl'>Recipie Name : {strMeal}</h1>
            <div>
                <p>category : {strCategory}</p>
                <p>Area : {strArea}</p>
                <p>Ingredient : {strIngredient1?strIngredient1:"not found"}</p>
            </div>
            <p className='text-left'>Description : {strInstructions? strInstructions.slice(0,200)+'...': strInstructions}</p>
            <button className='bg-amber-800 rounded text-white font-bold px-2 py-1'>Buy Now</button>
            <button className='bg-amber-800 rounded text-white font-bold px-2 py-1 ml-2'>Add To Cart</button>
        </div>
    );
};

export default SearchedMeal;