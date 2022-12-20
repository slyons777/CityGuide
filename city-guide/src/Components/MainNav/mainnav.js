import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// map react component import
import PlacesAutocomplete from "react-places-autocomplete";
// map uitility functions needed
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const MainNav = () => {
  // function categoryShow(e){
  //   e.preventDefault();
  //   document.querySelector('.card-group')
  // }

  const [address, setAddress] = React.useState("");
  const [cooordinates, setCoordinates] = React.useState({lat: null,
  lng: null})

  const handleSelect = async value => {
    // Lat and Long coordinate pull if we need them
    // const results = await geocodeByAddress(value);
    // const latLng = await getLatLng(results[0]);

    // setAddress(value);
    // setCoordinates(latLng);
  };

  return (
    <Container>
      <div className="mainNav">
        {/* <Form className="mainNav">
          <Form.Control
            type="search"
            placeholder="Where would you like to go?"
            className="me-2"
            aria-label="Search"
          /> */}

        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              {/* <p>Latitude: {cooordinates.lat}</p>
              <p>Longitude: {cooordinates.lng}</p> */}

              <input
                {...getInputProps({
                  placeholder: "Where would you like to go?",
                })}
              />
              <a
                href="#"
                className="categoryButton"
              >
                SEARCH
              </a>
              <div>
                {loading ? <div>...just a moment</div> : null}

                {suggestions.map((suggestion) => {
                  return <div>{suggestion.description}</div>;
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        {/* <a
          href="#"
          className="categoryButton"
        >
          SEARCH
        </a> */}
        {/* </Form> */}
      </div>
    </Container>
  );
};

export default MainNav;
