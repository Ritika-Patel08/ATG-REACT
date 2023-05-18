import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function posts(props) {
  return (
    <Card className='ml-0 sm:ml-40 mt-7 cardpost' >
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.type}</Card.Title>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
    </Card>
  );
}

export default posts;