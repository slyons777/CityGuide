import Container from "react-bootstrap/Container";

const LandingHeader = () =>  {
  return (
    <Container>
      <div className="word">
        <span className="fadeIn">VAGARI</span>
      </div>

      <div className="headerTagline">
        <span id="tag">- Not all who wander are lost...</span>
      </div>
    </Container>
  );
}

export default LandingHeader;
