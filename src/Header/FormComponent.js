import React, {useRef} from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import cities from "../Header/cities.json";
import dataTypes from "./type.json";
import 'dotenv/config';

export default function FormComponent(props) {

const formElement = useRef(null);

function handleInput () {
	console.log(formElement);

	formElement.current.dispatchEvent(
		new Event('submit', { cancelable: true, bubbles: true})
	)
}

	return (
		<Container>
			<Form ref={formElement} onInput={handleInput} onSubmit={props.handleForm}>
				<Row>
					<Col>       
					<Form.Group className="mb-3" controlId="city">
						<Form.Label>Choose city</Form.Label>
						<Form.Select defaultValue={props.selectedCity} name="city" aria-label="Default select example">
							<option>Open this select menu</option>
							{cities.map((city, i) =>
								<option value={i} key={city.name}>{city.name}</option>
							)}
						</Form.Select>
					</Form.Group>
					</Col>
					<Col>  <Form.Group className="mb-3" controlId="language">
						<Form.Label>Choose language</Form.Label>
						<Form.Select defaultValue={props.language} name="language" aria-label="Default select example">
							<option>Open this select menu</option>
							{["en", "kz", "ru"].map(language =>
								<option key={language}>{language}</option>
							)}
						</Form.Select>
					</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>             <Form.Group className="mb-3" controlId="data-type">
						<Form.Label>Choose Data type</Form.Label>
						{dataTypes.map(dtype =>
							<Form.Check
								key={dtype.value}
								id={dtype.value}
								type="checkbox"
								name="dataType"
								defaultChecked={props.dataType.value === dtype.value}
								label={dtype.label}
								value={dtype.value}
							/>
						)}
					</Form.Group></Col>
					<Col>        <Form.Group controlId="formGroupRadio">
						<Form.Label>Choose unit</Form.Label>
						{['standard', 'metric', 'imperial'].map(unit =>
							<Form.Check
								key={unit}
								id={unit}
								name="unit"
								type="radio"
								label={unit}
								value={unit}
								defaultChecked={props.unit === unit}
							/>
						)}
					</Form.Group></Col>
				</Row>
				</Form>
		</Container>
	)
}

FormComponent.defaultProps = {
	selectedCity: 0,
	language: "en",
	dataType: dataTypes.find(type => type.label === "Daily"),
	unit: "metric"
}
