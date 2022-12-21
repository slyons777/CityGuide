import React from "react";
import Container from "react-bootstrap/Container";

// map react component import
import PlacesAutocomplete from "react-places-autocomplete";
// map uitility functions needed
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const MainNav = () => {
  const [address, setAddress] = React.useState("");
  //   const [cooordinates, setCoordinates] = React.useState({
  //     lat: null,
  //     lng: null,
  //   });

  const handleSelect = async (value) => {
    // Lat and Long coordinate pull if we need them
    // const results = await geocodeByAddress(value);
    // const latLng = await getLatLng(results[0]);
    setAddress(value);
    // setCoordinates(latLng);
  };

  const handleChange = async (value) => {
    setAddress(value);
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
          onChange={handleChange}
          // onSelect={handleSelect}
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
              <div>
                {loading && <div>Just a moment...</div>}

                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? {
                        backgroundColor: "gray",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "none", cursor: "pointer" };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
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
