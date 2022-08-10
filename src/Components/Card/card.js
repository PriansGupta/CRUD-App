import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { DeleteCard } from "../../Store/Actions";
import CardEdit from "./cardEdit";
import Video from "../Video/video";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carditem = (props) => {
  const dispatch = useDispatch();
  const Delete = () => {
    toast.success("Card Deleted", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(DeleteCard(props));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <Video link={props.link} name={props.name} id={props.id}></Video>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Card>
  );
};

export default Carditem;
