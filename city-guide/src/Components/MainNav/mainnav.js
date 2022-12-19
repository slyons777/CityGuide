import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const MainNav = () => {
  // function categoryShow(e){
  //   e.preventDefault();
  //   document.querySelector('.card-group')
  // }

  return (
    <Container className="searchBar">
      <div className="searchContent">
        <Form className="mainNav">
          <Form.Control
            type="search"
            placeholder="Where would you like to go?"
            className="me-2"
            aria-label="Search"
          />
          <a
            href="#"
            className="categoryButton"
          >
            SEARCH
          </a>
        </Form>
      </div>
    </Container>
  );
};

export default MainNav;
