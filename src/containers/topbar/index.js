import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/spotify-logo-green.svg";
import styles from "./topbar.module.scss";

export const Topbar = () => {
  const {
    auth: { user },
  } = useSelector((state) => state);

  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        <div>
          <Link to="/home">
            <Logo style={{ height: "30px" }} />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row-reverse",
          }}
        >
          <span
            style={{
              color: "#00f387",
              fontSize: "0.8rem",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
          >
            {user.name}
          </span>

          <figure
            style={{
              borderRadius: "50px",
              border: "1px solid #5c5970",
              height: "35px",
              overflow: "hidden",
              width: "35px",
              margin: 0,
              padding: 0,
            }}
          >
            <img
              style={{
                height: "100%",
                width: "auto",
              }}
              src={user.image}
              alt={`Foto de perfil de ${user.name}`}
            />
          </figure>
        </div>
      </div>
    </header>
  );
};
