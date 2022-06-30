import { Row, Col, Container } from "react-bootstrap";
import { Navbars, ContentData, Footer } from "./CustomHooks";
export default function ContentPage() {
  return (
    <div>
      <Navbars />
      <Container>
        <Row>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
          <Col sm={4}>
            <ContentData />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
