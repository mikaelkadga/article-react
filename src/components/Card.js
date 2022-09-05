import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Card1 = (props) => {
    return (
        <Card style={{ width: props.width, height: props.height}}>
            <Card.Body>
                <Card.Img variant="top" src={props.image} style={{height: props.imageWidth, objectFit: "contain"}}/>
                <Card.Title style={{ height: '3rem', display: 'flex', alignItems: 'center'}}>{props.title}</Card.Title>
                {props.createdAt ? <Card.Text style={{ height: '2rem' }}>
                    created at {props.createdAt}
                    </Card.Text> : <></>
                }
                <Card.Text style={{ height: '4rem' }}>
                {props.body}
                </Card.Text>
                {props.buttonEdit ? <Button variant="dark" className="" onClick={props.onClickEdit}>
                        edit
                </Button> : <></>
                }
                {props.button ? <Button variant="dark" className="align-self-end" onClick={props.onClick}>
                        {props.buttonText}
                </Button> : <></>
                }
            </Card.Body>
        </Card>
    )
}

export default Card1