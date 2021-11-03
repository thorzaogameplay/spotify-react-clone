import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { endpoints } from "../../../config/constants";

export const Playlist = ({ categoryId, name, path, id }) => {
  return (
    <div>
      <Link to={`${path}/${categoryId}/${id}`}>{name}</Link>
    </div>
  );
};
