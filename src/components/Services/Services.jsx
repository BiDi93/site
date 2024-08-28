import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import webIcon from "../../assets/images/web.png";
import designIcon from "../../assets/images/design.png";
import ecommerceIcon from "../../assets/images/ecommerce.png";
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";

export default function Services() {
  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="serviceMainTitle">MY SERVICES</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img className="webIcon" src={webIcon} />
              <h2>Website Services</h2>
              <p>Web application solution design services </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img className="designIcon" src={designIcon} />
              <h2 className="serviceName">Design Services</h2>
              <p>Qualified designer to meet your end goal</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img className="ecommerceIcon" src={ecommerceIcon} />
              <h2>Ecommerce PLatform</h2>
              <p>
                Publish some ecommerce PLatform to the cloud and make you
                billionaire
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
