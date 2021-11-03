import React from "react";
import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

export const Player = () => {
  const { content } = useSelector((state) => state);

  return content.currentTrack ? (
    <ReactAudioPlayer src={content.currentTrack} autoPlay controls />
  ) : null;
};
