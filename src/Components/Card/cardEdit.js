import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { EditCard } from "../../Store/Actions";
import { useSelector } from "react-redux";

const CardEdit = (props) => {
  const Buckets = useSelector((state) => state.Bucket);

  const [Name, setName] = useState(props.name);
  const [link, setlink] = useState(props.link);
  const [Bucket, setBucket] = useState(props.Bucket);

  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);

  const NameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const linkChangeHandler = (e) => {
    setlink(e.target.value);
  };

  const BucketChangeHandler = (e) => {
    setBucket(e.target.value);
  };

  const AddCard = () => {
    let idx = Buckets.map((e) => {
      return e.name;
    }).indexOf(Bucket);

    console.log(idx);
    if (idx !== -1) {
      const card = {
        name: Name,
        link: link,
        Bucket: Bucket,
        id: props.id,
      };
      console.log(card);
      dispatch(EditCard(card));
      if (card.name.length > 0) {
      }
      setSmShow(false);
    }
  };
  return (
    <>
      <Button variant="dark" onClick={() => setSmShow(true)} className="me-2">
        Edit
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="BucketInput">
            <form>
              <span>
                <label>Name</label>
                <input
                  value={Name}
                  onChange={NameChangeHandler}
                  type="text"
                  placeholder="Card name"
                ></input>
              </span>
              <span>
                <label>Link</label>
                <input
                  value={link}
                  onChange={linkChangeHandler}
                  type="text"
                  placeholder="Video Link"
                ></input>
              </span>
              <span>
                <label>Bucket</label>
                <input
                  value={Bucket}
                  onChange={BucketChangeHandler}
                  type="text"
                  placeholder="Bucket"
                ></input>
              </span>
              <Button onClick={AddCard}>Update</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardEdit;
