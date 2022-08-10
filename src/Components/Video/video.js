import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PlayCircle } from "react-ionicons";
import YouTube from "react-youtube";
import getYouTubeId from "get-youtube-id";
import { useDispatch } from "react-redux";
import { AddHistory } from "../../Store/Actions";

const Video = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();

  const PlayVideo = () => {
    const history = {
      name: props.name,
      link: props.link,
      id: props.id,
    };
    dispatch(AddHistory(history));
    setLgShow(true);
  };

  const id = getYouTubeId(props.link);

  const opts = {
    height: "390",
    width: "765",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (e) => {
    e.target.pauseVideo();
  };
  return (
    <>
      <PlayCircle
        onClick={PlayVideo}
        color={"#00000"}
        title="Play Video"
        height="40px"
        width="40px"
      />
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId={id} opts={opts} onReady={onReady} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Video;
