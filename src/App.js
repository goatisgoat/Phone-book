import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InfoBox from "./component/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [list, setList] = useState([]);
  const info = useSelector((state) => state.information);
  const showinput = useSelector((state) => state.connet);
  const dispatch = useDispatch();

  const createuserInfo = (e) => {
    e.preventDefault();
    dispatch({
      type: "INFO",
      paylode: { name: e.target.name.value, number: e.target.number.value },
    });
  };



  useEffect(() => {
    if(showinput !== '') {
      let list = info.filter(item => item.name.includes(showinput))
      setList(list)
    }else {
      setList(info)
      console.log(list)
    }
    
  }, [showinput, info]);

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
                <Form.Control
                  type="text"
                  placeholder="search"
                  onChange={(e) =>
                    dispatch({
                      type: "SEARCH",
                      paylode: { searchinfo: e.target.value },
                    })
                  }
                />
              </Col>
              <Col lg={2}>
                {" "}
                <Button variant="primary" type="button">
                  search
                </Button>
              </Col>
            </Row>
            num: {list.length} 
            {list.map((item) => <InfoBox item={item}/>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
