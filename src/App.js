import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComponent from './Header/HeaderComponents';
import dataTypes from "./Header/type.json";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { google_api_key } from "./keys";

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.238949,
  lng: -76.889709
};

function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: google_api_key
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])



  function handleSubmit(event) {

    event.preventDefault();
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];

    for (const dtype of event.target.dataType) {
      if (dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    let exclude = dataTypes.filter(dtype => !selectedTypes.includes(dtype.value));


    console.log(exclude);

    const language = event.target.language.value;

    console.log(city);
    console.log(unit);
    console.log(language);
  }

  return (
    <Container>
      <Row>
        <Col>
          <HeaderComponent handleForm={handleSubmit} /></Col>
      </Row>
      <Row>
        <Col>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={7}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : <></>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
