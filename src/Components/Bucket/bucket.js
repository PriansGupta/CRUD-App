import Card from "react-bootstrap/Card";
import React from "react";
import Carditem from "../Card/card";
import { useSelector } from "react-redux";
import NewCard from "../Card/newCard";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { DeleteAll } from "../../Store/Actions";

const Bucket = (props) => {
  const dispatch = useDispatch();
  const DeleteAllCards = () => {
    const Data = {
      Bucket: props.name,
    };
    dispatch(DeleteAll(Data));
  };

  const Cards = useSelector((state) => state.Card);
  const currentCards = Cards.filter((item) => props.name === item.Bucket);
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <h3>{props.name}</h3>
          <Button onClick={DeleteAllCards}>Delete All Cards</Button>
        </Card.Header>
        <Card.Body className="BucketBody">
          {currentCards.map((item) => {
            return (
              <Carditem
                name={item.name}
                link={item.link}
                id={item.id}
                Bucket={item.Bucket}
              />
            );
          })}
        </Card.Body>
        <NewCard Bucket={props.name}></NewCard>
      </Card>
    </div>
  );
};

export default Bucket;
