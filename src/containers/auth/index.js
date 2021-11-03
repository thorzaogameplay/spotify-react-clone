import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { camelCase } from "lodash";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../store/reducers/authSlice";
import { ScaleLoader } from "react-spinners";

export const Auth = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);

  const getInfoFromHash = (hash) => {
    if (!hash) {
      return { error: "access denied" };
    }

    return hash
      .substring(1)
      .split("&")
      .reduce((accumulator, item) => {
        if (item) {
          const keyValue = item.split("=");
          accumulator[camelCase(keyValue[0])] = decodeURIComponent(keyValue[1]);
        }

        return accumulator;
      }, {});
  };

  useEffect(() => {
    const data = getInfoFromHash(location.hash);

    console.log("data", data);

    if (data.error) {
      toast.error(data.error);
      return;
    }

    dispatch(loginSuccess(data));
  }, [dispatch, location.hash]);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setShouldRedirect(true), 3000);
    }
  }, [isLogged]);
  console.log("isLogged", isLogged);
  console.log("shouldRedirect", shouldRedirect);
  if (shouldRedirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <ScaleLoader loading size={200} />
    </div>
  );
};
