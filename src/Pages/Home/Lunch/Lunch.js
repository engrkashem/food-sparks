import React, { useContext } from 'react';
import { FoodContext } from '../../../App';
import FoodCard from '../FoodCard/FoodCard';

const Lunch = () => {

    const foods = useContext(FoodContext);

    const lunchFoods = foods.filter(food => food.catagory === 'lunch')

    return (
        <div className='food-container'>
            {
                lunchFoods.map(food => <FoodCard
                    key={food.id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default Lunch;