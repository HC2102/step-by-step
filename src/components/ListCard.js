import './listCard.css'
import { Card } from "react-bootstrap";
import { products } from './data/db'
const ListCard = () => {
    return (
        <section className="list-card">
            <div className="container">
                <div className="row">
                    {products.map((p) => (
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Card>
                                <Card.Img variant="top" src={p.image} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>{p.describe}</Card.Text>
                                    <button className="btn btn-primary">Add To Cart</button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ListCard;