import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InfoBox from "./component/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [searchInfo, setSearchInfo] = useState('')
  const info = useSelector((state) => state.information);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const createuserInfo = (e) => {
    e.preventDefault();
    dispatch({ type: "COUNT" });
    dispatch({
      type: "INFO",
      paylode: { name: e.target.name.value, number: e.target.number.value },
    });
  };

  const search = () => {
    setSearchInfo(searchInfo)
  }
  return (
    <div>
      <Container>
        <h1 className="maintext">Phone Book</h1>
        <Row>
          <Col lg={6}>
            <Form onSubmit={(e) => createuserInfo(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                create
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="searchbox">
            <Row>
              <Col lg={10}>
                <Form.Control type="text" placeholder="search" onChange={(e)=> setSearchInfo(e.target.value)}/>
              </Col>
              <Col lg={2}>
                {" "}
                <Button variant="primary" type="button" onClick={search}>
                  search
                </Button>
              </Col>
            </Row>
            num: {count}
            {info.map((item) =>{
              if(searchInfo === '') {
                return <InfoBox item={item}/>
                
              }else if(item.name === searchInfo) {
                return <InfoBox item={item}/>
              }
              return ''
            }
            )}
            
 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
