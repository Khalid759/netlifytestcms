import React, { useEffect, useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import HelpDesk from "../../Common/HelpDesk/helpDesk";
import { API_URL } from "../../../../../config/config.js";

function ThankYou(props) {
  const video = useRef(null);
  const [videoElement, setVideoElement] = useState(null);

  useEffect(() => {
    setVideoElement(video.current);
  });

  var timeStarted = -1;
  var timePlayed = 0;
  var duration = 0;
  var watched = false;
  var videoWatched = false;

  const videoStartedPlaying = () => {
    duration = videoElement.duration;
    timeStarted = new Date().getTime() / 1000;

    videoElement.addEventListener("timeupdate", checkPlayTime);
  };
  const checkPlayTime = async () => {
    if (timeStarted > 0) {
      var playedFor = new Date().getTime() / 1000 - timeStarted;
      timeStarted = new Date().getTime() / 1000;
      timePlayed += playedFor;
    }
    if (timePlayed >= duration) {
      timePlayed = duration;
    }
    if (
      Math.round(timePlayed % 5) == 0 &&
      Math.round(timePlayed) >= 5 &&
      !videoWatched
    ) {
      try {
        const res = await fetch(
          `${API_URL}/update_lead/by-email?email=${props.email}&program=${
            props.program
          }&watched_duration=${Math.round(timePlayed)}`
        );
        console.log("video success", res.data);
      } catch (err) {
        console.log("video error", err);
      }
    }

    if (!videoWatched) {
      if (timePlayed >= duration * 1) {
        videoWatched = true;
        watched = true;

        const res = await fetch(
          `${API_URL}/update_lead/by-email?email=${props.email}&program=${
            props.program
          }&watched_video=${watched}&watched_duration=${Math.round(timePlayed)}`
        );
        console.log("video completed success", res.data);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="pbm-screen-thankYou">
        <div className="success-msg mid-container">
          You have successfully submitted your application.
        </div>

        <div className="curve-container">
          <div className="next-steps mtop-2 mid-container">
            Next Steps: Here's a short video on how this helps you build a
            fantastic marketing career from Varun Satia, Founder and CEO,
            Kraftshala
          </div>

          <div className="video-msg mtop-2 mid-container">
            <video
              width="100%"
              height="100%"
              id="pbmVideo"
              ref={video}
              onPlay={videoStartedPlaying}
              controls
            >
              <source
                // src="https://s3.ap-south-1.amazonaws.com/kraftshala/task_charters/videos/157/1619858426.mp4"
                src="https://s3.ap-south-1.amazonaws.com/kraftshala/task_charters/videos/94/1630064229.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="chat-with-us">
            <a
              href="https://wa.me/message/FRVU6O5QXTAZH1"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/chat-with-us.png"
                alt="Chat with us"
                placeholder="none"
              />
            </a>
          </div>

          <div className="past-students mtop-2 mid-container">
            Here’s what some of the past students say about the program :{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLGSERCphonhiOPVtXpUFhZscm08euoyZX"
              target="_blank"
              rel="noreferrer"
            >
              Kraftshala Alumni Stories
            </a>
          </div>
          <HelpDesk />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ThankYou;
