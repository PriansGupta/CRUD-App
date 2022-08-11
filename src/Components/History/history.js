import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

const History = () => {
  const HistoryItems = useSelector((state) => state.CreateHistory);
  return (
    <ListGroup as="ol" numbered>
      {HistoryItems.length === 0 && <h6>Nothing Viewed Yet</h6>}
      {HistoryItems.map((item) => {
        return (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.Cardname}</div>
              <a href={item.link}>{item.link}</a>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default History;
