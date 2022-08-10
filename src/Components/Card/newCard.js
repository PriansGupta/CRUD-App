import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import uniquid from "uniqid";
import { useDispatch } from "react-redux";
import { CreateNewCard } from "../../Store/Actions";

const NewCard = (props) => {
  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  const Name = useRef();
  const Link = useRef();

  const AddCard = () => {
    const card = {
      name: Name.current.value,
      link: Link.current.value,
      id: uniquid(),
      Bucket: props.Bucket,
    };
    console.log(card);
    if (card.name.length > 0) {
      dispatch(CreateNewCard(card));
    }
    setSmShow(false);
  };
  return (
    <>
      <Button variant="info" onClick={() => setSmShow(true)} className="me-2">
        Add Card
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Create Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="BucketInput">
            <form>
              <span>
                <label>Name</label>
                <input ref={Name} type="text" placeholder="Card name"></input>
              </span>
              <span>
                <label>Link</label>
              <input ref={Link} type="text" placeholder="Video Link"></input>
              </span>
              <Button onClick={AddCard}>Add</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewCard;
