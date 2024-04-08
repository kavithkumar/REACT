import { Button, Card } from "react-bootstrap";


export function CartItems({product}) {
    return (
        <>
            <Card key={product.id} style={{ width: '18rem',margin:'10px' }}>
                <div className='text-center' style={{margin:'10px'}}>
                <Card.Img variant="top" src={product.image} style={{width:'80px',height:'80px'}} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price}
                    </Card.Text>
                    <Button variant="primary">Remove</Button>
                </Card.Body>
                </div>
            </Card>
        </>
    );
}