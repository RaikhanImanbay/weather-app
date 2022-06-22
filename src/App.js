import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComponent from './Header/HeaderComponents';
import dataTypes from "./Header/type.json";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { google_api_key } from "./keys";

const containerStyle = {
  width: '700px',
  height: '600px'
};

const center = {
  lat: 51.169392,
  lng: 71.449074
};

function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: google_api_key,
  })

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
