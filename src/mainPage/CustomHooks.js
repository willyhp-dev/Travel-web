import {Navbar,Container,Nav,Carousel,Card,Button,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Travel1 from "./images/Travel1.jpg";
import Travel2 from "./images/travel2.jpg";
import Travel3 from "./images/travel3.jpg";
const Navbars = () =>{
  return (
    <Navbar bg="success" variant="dark" className="shadow">
    <Container>
      <Link to ="/">
         <Navbar.Brand href="#home">Travel </Navbar.Brand>
      </Link>
      <Nav>
        <Link to ="/login" className ="mr-2">
        <Button className ="btn btn-sm">Login</Button>
        </Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

const Sliders = () =>{
  return(
    <Carousel className ="mt-1">
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 heights border-settings"
        src={Travel1}
        alt="First slide"
        
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100 heights border-settings"
        src={Travel2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 heights border-settings"
        src={Travel3}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

const CardFeatures = () =>{
  return(
    <Card  className="mt-3">
    <Card.Img variant="top" src={Travel1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
   
    </Card.Body>
    <Card.Footer className="bg-success " >
      <Link to ="/detail">
      <Button variant="light">Detail</Button>
      </Link>
  
    </Card.Footer>
  </Card>
  )
}

const Content = () =>{
  return(
    <Card  className="mt-3">
    <Card.Img variant="top" src={Travel1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
   
    </Card.Body>
    <Card.Footer className="bg-success " >
      <Link to ="/content">
      <Button variant="light">Detail</Button>
      </Link>
    
    </Card.Footer>
  </Card>
  )
}

const Footer = () =>{
  return (
    <>
    <Card className="footer-size bg-success text-white">
    <Container>
        <Row>
            <Col sm={6}>
              <p>Kontak Kami : 0877334635840</p>
              <p>Alamat : Pontianak, Kalimantan Barat</p>
            </Col>
            <Col sm={6}>LINK : TRAVELOCA.ID</Col>
          </Row>   
          </Container>
      </Card>
  
     
    </>
  )
 }

 const ContentData = () =>{
  return(
    <Card style={{ width: '18rem' }} className="mt-3">
    <Card.Img variant="top" src={Travel1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
   
    </Card.Body>
    <Card.Footer className="bg-success " >
    <Button variant="light">Detail</Button>
    </Card.Footer>
  </Card>
  )
}

 export{
  Navbars,Sliders,CardFeatures,Content,Footer,ContentData
}

