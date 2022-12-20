import React from "react";



function RestaurantImage(prop) {
    const { placeId } = props;

    const API_KEY = 'AIzaSyCP5KXlPJPFydNhzYnO56_79ThpS-cvn0Y';
    const maxWidth = 400;
    const maxHeight = 400;
    const pictureReference = 'PHOTO_REFERENCE'

    const url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&maxheight=${maxheight}&photorefernce=${pictureReference}&key=${AIzaSyCP5KXlPJPFydNhzYnO56_79ThpS-cvn0Y}"

    return (
        <img src={url} alt="Restaurant" />

        
    )
}

export default RestaurantImage;