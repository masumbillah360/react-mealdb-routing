import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllFoods from './AllFoods';
import Blog from './Blog';
import Friend from './Friend';
import Home from './Home';
import Layout from './Layout';
import PageNot from './PageNot';

const Router = () => {
    const router = createBrowserRouter([
        { path:'' , element : <Layout></Layout>, children: [
            { path: '/home', 
            loader: async()=>{
                return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            },
            element : <Home></Home> },

            { path: '/all_foods/:foodcat',
            loader: async({params})=>{
                return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.foodcat}`)
            },
            element: <AllFoods></AllFoods> },
            { path: '/blog' , element : <Blog></Blog> },
            { path: '/friends', element : <Friend></Friend> }
        ]},
        { path: '*' , element: <PageNot></PageNot> }
    ])
    return (
        <div>
            <RouterProvider router={ router }></RouterProvider>
        </div>
    );
};

export default Router;
