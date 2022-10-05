import React from "react";

const SingleFood = ({ meal }) => {
	const {
		strMeal,
		strMealThumb,
	} = meal;
	return (
		<div className="border-2 p-2 rounded">
			<img className="mx-auto rounded" src={strMealThumb} alt="" />
			<h1 className="font-bold text-xl">Recipie Name : {strMeal}</h1>
			<button className="bg-amber-800 rounded text-white font-bold px-2 py-1">
				Buy Now
			</button>
			<button className="bg-amber-800 rounded text-white font-bold px-2 py-1 ml-2">
				Add To Cart
			</button>
		</div>
	);
};

export default SingleFood;
