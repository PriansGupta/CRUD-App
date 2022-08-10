import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { DeleteCard } from "../../Store/Actions";
import CardEdit from "./cardEdit";

const Carditem = (props) => {
  const dispatch = useDispatch();
  const link = props.link;
  const Delete = () => {
    dispatch(DeleteCard(props));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ButtonGroup aria-label="Basic example">
          <CardEdit
            name={props.name}
            link={props.link}
            Bucket={props.Bucket}
            id={props.id}
          ></CardEdit>
          <Button variant="danger" onClick={Delete}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Carditem;
