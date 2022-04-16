import React, { useContext } from 'react';
import { FoodContext } from '../../../App';
import FoodCard from '../FoodCard/FoodCard';

const Dinner = () => {

    const foods = useContext(FoodContext);
    const dinnerFoods = foods.filter(food => food.catagory === 'dinner')

    return (
        <div className='food-container'>
            {
                dinnerFoods.map(food => <FoodCard
                    key={food.id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default Dinner;