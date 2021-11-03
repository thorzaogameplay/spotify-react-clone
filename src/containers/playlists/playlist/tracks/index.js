import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { endpoints } from "../../../../config/constants";
import {
  saveTracks,
  setCurrentTrack,
} from "../../../../store/reducers/contentSlice";
import { set } from "lodash";

export const Tracks = ({ path }) => {
  const { auth, content } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  useEffect(() => {
    axios
      .get(endpoints.getPlaylistsTracks.url(playlistId), {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then(({ data }) => {
        dispatch(saveTracks(data.items));
      });
  }, [playlistId, auth, dispatch]);

  const handleClickOnTrack = (track) => {
    console.log(track);
    console.log(track.preview_url);
    dispatch(setCurrentTrack(track.preview_url));
  };

  return (
    <div>
      {content.tracks.map(({ track }) => (
        <button key={track.id} onClick={() => handleClickOnTrack(track)}>
          {track.name}
        </button>
      ))}
    </div>
  );
};
