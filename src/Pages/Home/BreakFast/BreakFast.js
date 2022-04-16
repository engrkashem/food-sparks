import React, { useContext } from 'react';
import { FoodContext } from '../../../App';
import FoodCard from '../FoodCard/FoodCard';
import './BreakFast.css'


const BreakFast = () => {

    const foods = useContext(FoodContext)
    // console.log(foods)
    const breakfastFoods = foods.filter(food => food.catagory === 'breakfast');
    // console.log(breakfastFoods)

    return (
        <div className='food-container'>
            {
                breakfastFoods.map(food => <FoodCard
                    key={food.id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default BreakFast;