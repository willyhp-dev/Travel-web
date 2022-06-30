import { Row, Col, Card, Form, FormControl,Button } from "react-bootstrap";
import "./index.css";
import {Link} from "react-router-dom";
export default function LoginPage(){
    return(
        <>
          <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
            <div className ="heightz"></div>
          <Card>
            <Card.Header className="bg-success text-white">
              Login Form
            </Card.Header>
            <Form>
              <Card.Body>
                <Form.Group>
                  <Form.Label>email</Form.Label>
                  <FormControl
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <FormControl
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </Form.Group>
                Dont hava Account? <Link to ="/register">Register</Link>
              </Card.Body>
              <Card.Footer>
                <Button type ="submit">Login</Button>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
        </>
    )
}