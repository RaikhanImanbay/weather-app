import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComponent from './Header/HeaderComponents';
import dataTypes from "./Header/type.json";
import MapComponent from './Body/MapComponent';

function App() {

  const [form, setForm] = useState(null);

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

    let excludeDataType = dataTypes.filter(dtype => !selectedTypes.includes(dtype.value));

    const language = event.target.language.value;

    setForm({
      city,
      unit,
      language,
      excludeDataType
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <HeaderComponent handleForm={handleSubmit} /></Col>
      </Row>
      <Row>
        <Col>
          < MapComponent form={form}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
