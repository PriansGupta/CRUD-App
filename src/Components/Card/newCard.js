import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import uniquid from "uniqid";
import { useDispatch } from "react-redux";
import { CreateNewCard } from "../../Store/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (card.name.length && card.link.length && card.Bucket.length) {
      dispatch(CreateNewCard(card));
      toast.success("Card Created Successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.error("Provide proper details", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
                <input
                  ref={Link}
                  type="text"
                  placeholder="Youtube Video Link"
                ></input>
              </span>
              <Button onClick={AddCard}>Add</Button>
            </form>
          </div>
        </Modal.Body>
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
      </Modal>
    </>
  );
};

export default NewCard;
