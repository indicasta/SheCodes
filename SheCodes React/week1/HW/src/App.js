import "./styles.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import greenland from "./images/greenland.jpg";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Card className="text-bg-dark wrapper p-1">
          <Card.Img
            src={greenland}
            className="opacity-75"
            alt="Sky Greenland"
          />
          <Card.ImgOverlay>
            <Row className="justify-content-start">
              <Col sm={4} md={4} className="opacity-25 align-self-start me-5">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  role="form"
                  placeholder="Search for Location"
                  title="Complete the City"
                />
              </Col>
              <Row className="current-location">
                <Col
                  sm={1}
                  md={1}
                  className="my-2 justify-content-start align-self-start"
                >
                  <Button
                    type="button"
                    className="btn btn-dark"
                    id="current-weather"
                    title="Current Location"
                  >
                    <span role="img" aria-label="Current Position">
                      📍{" "}
                    </span>
                  </Button>
                </Col>
                {/* <div
                  className="alert alert-danger fade in hide d-flex col-sm-5 col-md-6 col-lg-6 my-2 py-2 fw-bold"
                  role="alert"
                  id="error-notFound"
                >
                  <svg
                    className="bi flex-shrink-0 me-1"
                    width="20"
                    height="24"
                    role="img"
                    aria-label="Danger:"
                  >
                    <use xlink:href="#exclamation-triangle-fill" />
                  </svg>
                  <div>
                    Uh-oh! City not found!
                    <span role="img" aria-label="surprise face">
                      😲{" "}
                    </span>
                  </div>
                </div> */}
              </Row>
            </Row>
            <Row gap={3}>
              <Col
                sm={6}
                md={6}
                lg={10}
                className="position-absolute top-50 end-0 my-2 translate-middle-y align-self-start current ms-auto"
                gap={3}
              >
                <Card.Title
                  className="selectedCity pe-2 textProperties ms-auto"
                  gap={3}
                >
                  <h1>Barcelona</h1>
                </Card.Title>
                <Card.Body className="text-start textProperties">
                  <div className="text-center current-date textProperties">
                    <div id="day">
                      <h4>Monday</h4>
                    </div>
                    <div id="date">
                      <h4>February 6, 2023</h4>
                    </div>
                    <h5>
                      Last Updated: 1:11:49 PM
                      <span id="time"></span>
                    </h5>
                  </div>
                  <div className="text-center current-forecast">
                    <p className="card-text fw-bold">
                      <i
                        className="fa-solid fa-temperature-three-quarters"
                        id="thermo"
                      ></i>
                      <span className="temperature">10</span>
                      <span className="units">°C|</span>
                      <button className="units" id="unit">
                        °F
                      </button>
                    </p>
                    <p id="condition" className="fw-bold"></p>
                  </div>
                  <div className="current-cond textProperties">
                    <Row className="justify-content-around">
                      <Col sm={7} md={7}>
                        <p className="fw-bold feelsLike" id="feelsLike">
                          <i className="fa-solid fa-temperature-low"></i>FEELS
                          LIKE: 9°C
                        </p>
                      </Col>
                      <Col sm={5} md={5}>
                        <p id="humidity" className="fw-bold">
                          <i className="fa-solid fa-droplet"></i> HUM:62%
                        </p>
                      </Col>
                    </Row>
                    <Row className="justify-content-around">
                      <Col sm={6} md={6}>
                        <p id="wind" className="fw-bold col-6">
                          <i className="fa-solid fa-wind"> </i> WIND:10m/s
                        </p>
                      </Col>
                      <Col sm={6} md={6}>
                        <p id="precipitation" className="fw-bold text-nowrap">
                          <i className="fa-solid fa-cloud-showers-heavy"></i>
                          RAIN:0.27mm
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Col>
            </Row>
            <Row className="justify-content-start">
              <div className="textProperties forecast" id="forecast"></div>
              <div className="textProperties forecast" id="forecast2"></div>
            </Row>
            {/* <Col
              sm={6}
              md={6}
              className="btn-group mb-5 position-absolute bottom-0 start-0"
              role="group"
              aria-label="Days group"
            >
              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Tue
                <p>
                  <i className="fa-solid fa-cloud-sun"></i>
                  <br />
                  21°C <br />
                  12°C
                </p>
              </Button>
              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Wed
                <p>
                  <i className="fa-solid fa-cloud-rain"></i>
                  <br />
                  18°C <br />
                  10°C
                </p>
              </Button>
              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Thu
                <p>
                  <i className="fa-solid fa-cloud-sun-rain"></i>
                  <br />
                  16°C <br />
                  8°C
                </p>
              </Button>

              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Fri
                <p>
                  <i className="fa-solid fa-cloud-bolt"></i>
                  <br />
                  18°C <br />
                  10°C
                </p>
              </Button>
              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Sat
                <p>
                  <i className="fa-solid fa-umbrella"></i>
                  <br />
                  15°C <br />
                  5°C
                </p>
              </Button>
              <Button
                type="button"
                className="btn btn-dark cols-2 textProperties"
              >
                Sun
                <p>
                  <i className="fa-solid fa-sun"></i>
                  <br />
                  28°C <br />
                  20°C
                </p>
              </Button>
            </Col> */}
          </Card.ImgOverlay>
          {/* <svg xmlns="http://www.w3.org/2000/svg">
            <symbol
              id="exclamation-triangle-fill"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </symbol>
          </svg> */}
        </Card>
        <div className="card-footer text-center fw-bold">
          <a
            className="card-link textProperties"
            href="https://github.com/indicasta/CuteWeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source
          </a>
          &nbsp;Coded by IndiCasta🧿
        </div>
      </Container>
    </div>
  );
}
