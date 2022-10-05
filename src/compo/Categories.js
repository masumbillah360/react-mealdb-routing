import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ meal }) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = meal;
    const navigate = useNavigate();
    const loadAllFood =()=>{
        navigate(`/all_foods/${strCategory}`)
    }
    // console.log(meal);
    return (
        <div data-aos="zoom-in" className='border-2 p-2 rounded'>
            <img className='mx-auto' src={strCategoryThumb} alt="" />
            <h1 className='font-bold text-xl'>Recipie Name : {strCategory}</h1>
            <p className='text-left'>Description : {strCategoryDescription? strCategoryDescription.slice(0,200)+'...': strCategoryDescription}</p>
            <button onClick={loadAllFood} className='bg-amber-800 rounded text-white font-bold px-2 py-1'>See All Food</button>
        </div>
    );
};

export default Categories;