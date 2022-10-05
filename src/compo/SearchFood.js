import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchedMeal from './SearchedMeal';

const SearchFood = () => {
    const searchedMeal = useLoaderData();
    return (
        <div>
            <h1>All Searched Food ({searchedMeal.meals.length})</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    searchedMeal.meals.map(meal=> <SearchedMeal meal={meal} key={meal.idMeal}></SearchedMeal> )
                }
            </div>
        </div>
    );
};

export default SearchFood;