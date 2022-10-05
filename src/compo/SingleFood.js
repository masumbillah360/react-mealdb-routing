import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFood = ({ meal }) => {
	const {
		strMeal,
		strMealThumb,
	} = meal;

	const navigate = useNavigate()
	const seeDetails =()=>{
		navigate(`/home/${strMeal}`)
	}
	return (
		<div className="border-2 p-2 rounded relative">
			<img className="mx-auto rounded" src={strMealThumb} alt="" />
			<h1 className="font-bold text-xl mb-12">Recipie Name : {strMeal}</h1>
			<button className="bg-amber-800 rounded text-white font-bold px-2 py-1 absolute bottom-2 left-2">
				Buy Now
			</button>
			
			<button onClick={seeDetails} className="bg-amber-800 rounded text-white font-bold px-2 py-1 absolute bottom-2 inset-x-36">
				See Details
			</button>

			<button className="bg-amber-800 rounded text-white font-bold px-2 py-1 ml-2 absolute bottom-2 right-2">
				Add To Cart
			</button>
		</div>
	);
};

export default SingleFood;
