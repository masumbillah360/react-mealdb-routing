import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {
    const cat = useLoaderData()
    return (
        <div>
            <h1>Food Categories({cat.categories.length})</h1>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cat.categories.map((cats)=> <Categories meal={cats} key={cats.idCategory}></Categories>)
                }
            </article>
        </div>
    );
};

export default Home;