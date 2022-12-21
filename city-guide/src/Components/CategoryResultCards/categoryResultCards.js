import { Button } from "bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";

function CategoryResults() {
  return (
    <Card elevation={6}>
      <CardImg
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
        >
          {place.name}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          my={2}
        >
          <Rating
            name="read-only"
            value={Number(place.rating)}
            readOnly
          />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography component="legend">Price</Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            {place.price_level}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography component="legend">Ranking</Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} />
            <Typography
              variant="subtitle2"
              color="textSecondary"
            >
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
    // <Container>
    //   {Array.from({ length: 6 }).map((_, idx) => (
    //     <Col className="categoryResultCard">
    //       <Card>
    //         <img
    //           variant="top"
    //           src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/10/74/8b/bungalows-facing-mont.jpg?w=400&h=-1&s=1"
    //         />
    //         <Card.Body>
    //           <Card.Title>Place Name</Card.Title>
    //           <div className="Rating">
    //             <Card.Text>
    //               <h6>
    //                 <BsStarFill />
    //               </h6>
    //               <h6>
    //                 <BsStarFill />
    //               </h6>
    //               <h6>
    //                 <BsStarFill />
    //               </h6>
    //               <h6>
    //                 <BsStarFill />
    //               </h6>
    //             </Card.Text>
    //           </div>
    //         </Card.Body>
    //         <p className="cardAddress">Address</p>
    //         <div className="mapButton">
    //           <a
    //             href="#"
    //             className="categoryButton"
    //           >
    //             <h5>
    //               <FaMapMarkerAlt />
    //             </h5>
    //           </a>
    //         </div>
    //       </Card>
    //     </Col>
    //   ))}
    // </Container>
  );
}

export default CategoryResults;
