import React  from "react";
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Row className="py-3">
        <Router>
          <Routes>
            <Route path='/' element={<Panel/>} />
          </Routes>
        </Router>
      </Row>
    </Container>
  </div>
);

export default App;
