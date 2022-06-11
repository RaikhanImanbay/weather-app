import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import cities from "./cities.json";
import dataTypes from "./type.json";

export default function FormComponent(props) {


    return (
        <Container>
            <Form onSubmit={props.handleForm}>
                {dataTypes.map(dtype =>
                    <Form.Check
                        key={dtype.value}
                        type="checkbox"
                        name="dataType"
                        label={dtype.label}
                        value={dtype.value}
                    />
                )}
                <Form.Select name="city" aria-label="Default select example">
                    <option>Choose language</option>
                    {["en", "kz", "ru"].map(language =>
                        <option key={language}>{language}</option>
                    )}
                </Form.Select>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Choose city</Form.Label>
                    <Form.Select name="city" aria-label="Default select example">
                        <option>Open this select menu</option>
                        {cities.map(city =>
                            <option key={city.city}>{city.city}</option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formGroupRadio">
                    <Form.Label>Choose unit</Form.Label>
                    <Form.Check
                        name="unit"
                        type="radio"
                        label={"C"}
                        value="C"
                    />
                    <Form.Check
                        name="unit"
                        type="radio"
                        label={"F"}
                        value="F"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}