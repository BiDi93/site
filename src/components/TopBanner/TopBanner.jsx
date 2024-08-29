import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";

function TopBanner() {
  return (
    <Fragment>
      <Container fluid={true} className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent">
            <Row>
              <Col className="text-center">
                <h1 className="topTitle">ERP SOLUTION FOR SME</h1>
                <h4 className="topSubtitle">Learn profesionally</h4>
                <Button variant="primary">More Info</Button>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
}

export default TopBanner;
