import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Bar,
  // BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { Technology: "Webshere", Strength: 80 },
  { Technology: "Solaris", Strength: 90 },
  { Technology: "PHP", Strength: 80 },
  { Technology: "JAVA", Strength: 85 },
  { Technology: "AIX", Strength: 90 },
  { Technology: "MySQL", Strength: 92 },
  { Technology: "MSSQL", Strength: 81 },
  { Technology: "Oracle Database", Strength: 85 },
  { Technology: "Windows", Strength: 85 },
];

export default function Analysis() {
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceMainTitle">OUR EXPERTISE</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <p className="text-justify serviceDescription">
              Our expert team offers 24/7 application support, from
              troubleshooting errors to implementing updates, so your operations
              remain uninterrupted.<br></br>
              <br></br>Our hardware support services cover everything from
              installation and configuration to troubleshooting and maintenance,
              ensuring your physical devices perform at their best.<br></br>
              <br></br>
              Whether you need help with Windows, Linux, or Redhat,Solaris,AIX ,
              our operating system support services provide expert guidance to
              keep your systems secure and efficient.
            </p>
          </Col>
          <Col style={{ width: "50%", height: "400px" }} lg={6} md={12} sm={12}>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                layout="vertical"
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="Technology" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Strength" barSize={20} fill="#413ea0" />
              </ComposedChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
