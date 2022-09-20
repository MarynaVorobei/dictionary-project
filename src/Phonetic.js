import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="text">{props.phonetic.text}</div>
      <div className="audio-player">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
          style={{width: `100%`}}
        />
      </div>
    </div>
  );
}
