import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import uniquid from "uniqid";
import { useDispatch } from "react-redux";
import { CreateBucket } from "../../Store/Actions";

const NewBucket = () => {
  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  const Name = useRef();

  const AddBucket = () => {
    const bucket = {
      name: Name.current.value,
      id: uniquid(),
    };
    if (bucket.name.length > 0) {
      dispatch(CreateBucket(bucket));
    }
    setSmShow(false);
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
      </Modal>
    </>
  );
};

export default NewBucket;
