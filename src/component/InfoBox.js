import React from "react";
import { Col, Row } from "react-bootstrap";

const InfoBox = ({ item, searchInfo }) => {
  return (
    <div className="repeatbox">
      <Row>
        <Col lg={3}>
          <img
            width={90}
            src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
            alt=""
          />
        </Col>
        <Col lg={9}>
          {" "}
          <h4>{item.name}</h4>
          <p>{item.number}</p>
        </Col>
      </Row>
    </div>
  );
};

export default InfoBox;
