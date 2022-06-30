import { Container, Card, Table } from "react-bootstrap";
import {Navbars} from "./CustomHooks.js";
export default function BookingPage() {
  const Theads = () => {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
    );
  };
  const Tbody = () => {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    );
  };
  return (
    <>
    <Navbars/>
      <Container className ="mt-5">
        <Card>
          <Card.Header className="bg-success text-white">
            Travel Lint
          </Card.Header>
          <Card.Body>
            <p>Tabel Data Travel</p>
            <Table striped bordered hover size="sm">
                <Theads/>
                <Tbody/>
            </Table>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </Container>
    </>
  );
}
