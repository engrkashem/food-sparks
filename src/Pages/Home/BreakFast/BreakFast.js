import React, { useContext } from 'react';
import { FoodContext } from '../../../App';


const BreakFast = () => {

    const foods = useContext(FoodContext)
    console.log(foods)

    return (
        <div>
            <h2>This Break fast page</h2>
        </div>
    );
};

export default BreakFast;