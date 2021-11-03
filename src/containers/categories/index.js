import React from "react";
import { Link } from "react-router-dom";

export const Categories = ({ data, url }) => {
  return (
    <div>
      {data.map((category) => (
        <Link to={`${url}/${category.id}`} key={category.id}>
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};
