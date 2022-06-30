import { Row, Col, Card, Form, FormControl,Button } from "react-bootstrap";
import {Link} from "react-router-dom";
export default function RegisterPage() {
  return (
    <>
      <Row className ="mt-5">
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card>
            <Card.Header className="bg-success text-white">
              Register Akun
            </Card.Header>
            <Form>
              <Card.Body>
                <Form.Group>
                  <Form.Label>FullName</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FullName"
                  />
                </Form.Group>
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
                Already have Account? <Link to ="/login">Login</Link>
              </Card.Body>
              <Card.Footer>
                <Button type ="submit">Register</Button>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </>
  );
}
