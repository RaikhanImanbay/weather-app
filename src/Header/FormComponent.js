import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import cities from "./cities.json";
import dataTypes from "./type.json";
import 'dotenv/config';

export default function FormComponent(props) {


    return (
        <Container>
            <Form onSubmit={props.handleForm}>
                <Form.Group className="mb-3" controlId="data-type">
                    <Form.Label>Choose Data type</Form.Label>
                    {dataTypes.map(dtype =>
                        <Form.Check
                            key={dtype.value}
                            type="checkbox"
                            name="dataType"
                            defaultChecked={props.dataType.value === dtype.value}
                            label={dtype.label}
                            value={dtype.value}
                        />
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="language">
                    <Form.Label>Choose language</Form.Label>
                    <Form.Select defaultValue={props.language} name="language" aria-label="Default select example">
                        <option>Open this select menu</option>
                        {["en", "kz", "ru"].map(language =>
                            <option key={language}>{language}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Choose city</Form.Label>
                    <Form.Select defaultValue={props.selectedCity.name} name="city" aria-label="Default select example">
                        <option>Open this select menu</option>
                        {cities.map(city =>
                            <option key={city.name}>{city.name}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formGroupRadio">
                    <Form.Label>Choose unit</Form.Label>
                    {['standard', 'metric', 'imperial'].map(unit =>
                        <Form.Check
                            key={unit}
                            name="unit"
                            type="radio"
                            label={unit}
                            value={unit}
                            defaultChecked = { props.unit === unit}
                        />
                    )}

                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

FormComponent.defaultProps = {
    selectedCity: cities.find(city => city.name === "Astana"),
    language: "en",
    dataType: dataTypes.find(type => type.label === "Daily"),
    unit: "metric"
}
