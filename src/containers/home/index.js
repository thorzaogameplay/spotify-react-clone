import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Switch, useRouteMatch } from "react-router";
import { endpoints } from "../../config/constants";
import { saveCategories } from "../../store/reducers/contentSlice";
import { Dashboard } from "../../components/dashboard";
import { PrivateRoute } from "../privateRoute";
import { Categories } from "../categories";
import { Playlists } from "../playlists";
import { Tracks } from "../playlists/playlist/tracks";
import { setUser } from "../../store/reducers/authSlice";
import { Topbar } from "../topbar";

export const Home = () => {
  const { auth, content } = useSelector((state) => state);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    setCategoriesLoading(true);

    axios
      .get(endpoints.getCategories.url, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then(({ data }) => {
        dispatch(saveCategories(data.categories));
        setCategoriesLoading(false);
      });
  }, [auth, dispatch]);

  useEffect(() => {
    setUserLoading(true);

    axios
      .get(endpoints.getUserProfile.url, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then(({ data }) => {
        console.log("User: ", data);
        dispatch(setUser(data));
        setUserLoading(false);
      });
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <Categories data={content.categoriesItems} url={url} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <Playlists path={path} />
        </PrivateRoute>
        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <Tracks path={path} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};
