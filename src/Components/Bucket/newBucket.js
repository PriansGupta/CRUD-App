import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import uniquid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { CreateBucket } from "../../Store/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewBucket = () => {
  const Buckets = useSelector((state) => state.Bucket);
  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  const Name = useRef();

  const AddBucket = () => {
    const bucket = {
      name: Name.current.value,
      id: uniquid(),
    };
    let idx = Buckets.map((e) => {
      return e.name;
    }).indexOf(Name.current.value);

    if (idx !== -1) {
      toast.warn("Bucket already exists", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (bucket.name.length > 0) {
      dispatch(CreateBucket(bucket));
      toast.success("Bucket Created", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSmShow(false);
    } else {
      toast.error("Enter Bucket Name", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Button
        variant="success"
        onClick={() => setSmShow(true)}
        className="me-2"
      >
        Create Bucket
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Create Bucket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="BucketInput">
            <form>
              <input
                ref={Name}
                type="text"
                autoFocus
                placeholder="Bucket name"
              ></input>
              <Button onClick={AddBucket}>Create</Button>
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

export default NewBucket;
