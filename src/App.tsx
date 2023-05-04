import React  from 'react';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import { Container, Row } from 'react-bootstrap';

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Row className="py-3">
        <Panel/>
      </Row>
    </Container>
  </div>
);

export default App;
