import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { endpoints } from "../../config/constants";
import { savePlaylists } from "../../store/reducers/contentSlice";
import { ScaleLoader } from "react-spinners";
import { Playlist } from "./playlist";

export const Playlists = ({ path }) => {
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const { categoryId } = useParams();
  const { auth, content } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingPlaylists(true);
    axios
      .get(endpoints.getCategoriesPlaylists.url(categoryId), {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch(savePlaylists(data?.playlists?.items));
        setLoadingPlaylists(false);
      });
  }, [categoryId, auth, dispatch]);

  if (loadingPlaylists) {
    return (
      <div>
        <ScaleLoader loading size={200} />
      </div>
    );
  }

  return (
    <div>
      Estou na playlist da categoria {categoryId}
      <div>
        {content.playlists?.map((each) => {
          return (
            <Playlist
              id={each.id}
              path={path}
              categoryId={categoryId}
              name={each.name}
              key={each.id}
            />
          );
        })}
      </div>
    </div>
  );
};
