import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Card1 = (props) => {
    return (
        <Card style={{ width: '25rem', height: '13rem' }} className="m-2">
            <Card.Body>
                <Card.Title style={{ height: '3rem', display: 'flex', alignItems: 'center'}}>{props.title}</Card.Title>
                <Card.Text style={{ height: '4rem' }}>
                {props.body}
                </Card.Text>
                <Button variant="primary" className="align-self-end">read more</Button>
            </Card.Body>
        </Card>
    )
}

export default Card1