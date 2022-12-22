// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import { MdHotel } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import { MdOutlineAttractions } from "react-icons/md";
import { WiThermometer } from "react-icons/wi";
import { BsTreeFill } from "react-icons/bs";

const CategoryCards = ({setType, type,}) => {
  return (
    <Container>
      <CardGroup>
        <section className="mainCategoryOptions" onClick={() => setType("restaurants")}>
          <h1 className="categoryFood">
            <MdRestaurant /> 
          </h1>
        </section>
        <section className="mainCategoryOptions"  onClick={() => setType("weather")} >
          <h1 className="categoryWeather">
            <WiThermometer />
          </h1>
        </section>
        <section className="mainCategoryOptions" onClick={() => setType("hotels")}>
          <div>
            <h1 className="categoryStay">
              <MdHotel />
            </h1>
          </div> 
        </section>
        <section className="mainCategoryOptions" onClick={() => setType("hiking trail")}>
          <h1 className="categoryOutdoors">
            <BsTreeFill />
          </h1>
        </section>
        <section className="mainCategoryOptions"  onClick={() => setType('attractions')}>
          <h1 className="categoryAttractions">
            <MdOutlineAttractions />
          </h1>
        </section>
      </CardGroup>
    </Container>
  );
};

export default CategoryCards;

// <CardGroup>
//   <section className="mainCategoryOptions">
//     <Card className="categoryFood">
{
  /* <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
          /> */
}
{
  /* <Card> */
}
{
  /* <Card.Title>Food</Card.Title>
    </Card> */
}
{
  /* </Card> */
}
{
  /* <Card className="categoryWeather"> */
}
{
  /* <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
          /> */
}
{
  /* <Card> */
}
{
  /* <Card.Title>Weather</Card.Title> */
}
{
  /* </Card> */
}
{
  /* </Card>
    <Card className="categoryStay"> */
}
{
  /* <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
          /> */
}
{
  /* <Card> */
}
{
  /* <Card.Title>Stay</Card.Title> */
}
{
  /* </Card> */
}
{
  /* </Card>
    <Card className="categoryOutdoors"> */
}
{
  /* <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
          /> */
}
{
  /* <Card> */
}
{
  /* <Card.Title>Outdoors</Card.Title> */
}
{
  /* </Card> */
}
{
  /* </Card>
    <Card className="categoryAttractions"> */
}
{
  /* <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
          /> */
}
{
  /* <Card> */
}
{
  /* <Card.Title>Attractions</Card.Title> */
}
{
  /* </Card> */
}
{
  /* </Card>
  </section>
</CardGroup>; */
}
