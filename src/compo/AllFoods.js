import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleFood from "./SingleFood";

const AllFoods = () => {
	const allFood = useLoaderData();
	return (
		<div>
			<h1>Total Items : {allFood.meals.length}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{allFood.meals.map((meal) => (
					<SingleFood meal={meal} key={meal.idMeal}></SingleFood>
				))}
			</div>
		</div>
	);
};

export default AllFoods;
