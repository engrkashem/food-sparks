import React from 'react';
import { Button, Card } from 'react-bootstrap';

const FoodCard = ({ food }) => {
    const { name, description, price, img } = food;
    console.log(food)
    return (
        <div >
            <Card className='h-100 p-2' style={{ width: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className='d-flex flex-column justify-content-between h-100'>
                        <div>
                            <Card.Title>{name}</Card.Title>

                            <p>Description: <small>{description}</small></p>

                        </div>
                        <div className='mx-auto'>
                            <p className='mb-3'>Price: <span className='fw-bold fs-2'>${price}</span></p>
                            <Button variant="danger me-2">Add to cart</Button>
                            <Button variant="danger">View Details</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodCard;