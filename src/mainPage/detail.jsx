import { Card, Row, Col,Button,Container } from "react-bootstrap";
import {Navbars} from  "./CustomHooks";
import {Link} from "react-router-dom";
export default function DetailPage() {
  return (
    <div>
        <Navbars/>
        <Container className ="mt-5">
        <Card>
        <Card.Header className ="bg-success text-white">Detail Booking</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>Gambar</Col>
            <Col sm={6}>Title And Description</Col>
          </Row>
        </Card.Body>
        <Card.Footer className ="bg-success">
            <Link to ="/booking">
            <Button className ="btn btn-secondary">Booking</Button>
            </Link>
           
        </Card.Footer>
      </Card>
        </Container>
     
    </div>
  );
}
