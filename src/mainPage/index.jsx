import { Sliders, CardFeatures, Content, Footer } from "./CustomHooks.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbars } from "./CustomHooks.js";
import { Link } from "react-router-dom";

import "./index.css";
export default function TodoList() {
  return (
    <>
      <Navbars />
      <Container>
        <Sliders />
        <h3 className="mt-3">
          <center>FEATURES</center>
        </h3>
        <div className="borders"></div>
        <Row>
          <Col sm={4}>
            <CardFeatures />
          </Col>
          <Col sm={4}>
            <CardFeatures />
          </Col>
          <Col sm={4}>
            <CardFeatures />
          </Col>
        </Row>
        <h3 className="mt-3">
          <center>Content</center>
        </h3>
        <div className="borders"></div>
        <Row>
          <Col sm={4}>
            <Content />
          </Col>
          <Col sm={4}>
            <Content />
          </Col>
          <Col sm={4}>
            <Content />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={4}></Col>
          <Col sm={4}>
            <center>
              <Link to="/content" element>
                <Button className="mt-5">More</Button>
              </Link>
            </center>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
