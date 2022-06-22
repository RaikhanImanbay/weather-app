import React from 'react';
import { Container } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { google_api_key } from "../keys";
import cities from "../Header/cities.json";

const containerStyle = {
    height: '400px'
};

const center = {
    lat: 51.169392,
    lng: 71.449074
};

export default function MapComponent(props) {
    console.log(props.form);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: google_api_key,
    })
    return (
        <Container className='mt-4'>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={7}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            ) : <></>
            }
        </Container>
    )
}