import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeaderComponent from './Header/HeaderComponents';
function App() {

  function handleSubmit(event) {
    event.preventDefault();
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    console.log(city);
    console.log(unit);
}

  return (
    <Container>
  <Row>
    <Col>
    <HeaderComponent handleForm = {handleSubmit}/></Col>
  </Row>
</Container>
  );
}

export default App;
