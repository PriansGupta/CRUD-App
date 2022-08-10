import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Bucket from "./Components/Bucket/bucket";
import Col from "react-bootstrap/Col";
import NewBucket from "./Components/Bucket/newBucket";
import { useSelector } from "react-redux";
import History from "./Components/History/history";

function App() {
  const Buckets = useSelector((state) => state.Bucket);
  return (
    <div className="App">
      <Container fluid style={{ height: "auto" }}>
        <Row>
          <Col xs={3} className="History">
            <h1>History</h1>
            <History></History>
          </Col>
          <Col>
            <Row style={{ display: "flex", padding: "10px" }}>
              <Col>
                <h1>Frontend Task</h1>
              </Col>
              <Col>
                <NewBucket></NewBucket>
              </Col>
            </Row>
            <Row>
              {Buckets.length > 0 &&
                Buckets.map((item) => {
                  return <Bucket name={item.name} id={item.id}></Bucket>;
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
