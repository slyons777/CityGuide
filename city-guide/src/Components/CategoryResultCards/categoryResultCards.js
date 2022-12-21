import { Button } from "bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";

function CategoryResults() {
  return (
    <Container>
      <Row
        xs={6}
        md={4}
        className="g-4"
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col className="categoryResultCard">
            <Card>
              <img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/10/74/8b/bungalows-facing-mont.jpg?w=400&h=-1&s=1"
              />
              <Card.Body>
                <Card.Title>Place Name</Card.Title>
                <div className="Rating">
                  <Card.Text>
                    <h6>
                      <BsStarFill />
                    </h6>
                    <h6>
                      <BsStarFill />
                    </h6>
                    <h6>
                      <BsStarFill />
                    </h6>
                    <h6>
                      <BsStarFill />
                    </h6>
                  </Card.Text>
                </div>
              </Card.Body>
              <p className="cardAddress">Address</p>
              <div className="mapButton">
                <a
                  href="#"
                  className="categoryButton"
                >
                  <h5>
                    <FaMapMarkerAlt />
                  </h5>
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryResults;
