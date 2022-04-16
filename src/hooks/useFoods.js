import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/engrkashem/food-sparks/main/public/food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return [foods, setFoods];
}

export default useFoods;