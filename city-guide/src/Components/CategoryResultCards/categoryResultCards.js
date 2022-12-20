import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

function CategoryResults() {
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        className="g-4"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card className="categoryResultCard">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/10/74/8b/bungalows-facing-mont.jpg?w=400&h=-1&s=1"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryResults;
