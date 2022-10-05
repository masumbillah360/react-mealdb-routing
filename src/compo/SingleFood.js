import React from "react";

const SingleFood = ({ meal }) => {
	const {
		strMeal,
		strCategory,
		strArea,
		strInstructions,
		strMealThumb,
	} = meal;
	return (
		<div className="border-2 p-2 rounded">
			<img className="mx-auto rounded" src={strMealThumb} alt="" />
			<h1 className="font-bold text-xl">Recipie Name : {strMeal}</h1>
            <div className="flex justify-evenly bg-yellow-300 rounded p-1">
                <p>Category : {strCategory}</p>
                <p>Area : {strArea}</p>
            </div>
			<p className="text-left">
				Description :{" "}
				{strInstructions
					? strInstructions.slice(0, 200) + "..."
					: strInstructions}
			</p>
			<button className="bg-amber-800 rounded text-white font-bold px-2 py-1">
				Buy Now
			</button>
		</div>
	);
};

export default SingleFood;
