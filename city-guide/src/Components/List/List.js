import React, { useState, useEffect, createRef } from "react";
import {
  Spinner,
  Container,
  Row,
  Col,
  FormLabel,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";
const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);
  return (
    <Container className={classes.container}>
      <h4>Food & Dining around you</h4>
      {isLoading ? (
        <div className={classes.loading}>
          <Spinner
            animation="border"
            size="lg"
          />
        </div>
      ) : (
        <>
          <Form>
            <FormLabel htmlFor="type">Type</FormLabel>
            <FormControl
              as="select"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </FormControl>
          </Form>
          <Form>
            <FormLabel htmlFor="rating">Rating</FormLabel>
            <FormControl
              as="select"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">All</option>
              <option value="3">Above 3.0</option>
              <option value="4">Above 4.0</option>
              <option value="4.5">Above 4.5</option>
            </FormControl>
          </Form>
          <Row>
            {places?.map((place, i) => (
              <Col key={i}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default List;
