import React from "react";
import { Link, Outlet } from "react-router-dom";

const OldLayout = () => {
  const listMenu = [
    { to: "/", path: "/", name: "Home" },
    {
      to: "fungsikomponen",
      path: "/fungsikomponen",
      name: "FunctionComponent",
    },
    { to: "listproduct", path: "/listproduct", name: "Listproduct" },
    { to: "parent", path: "/parent", name: "ParentChild" },
    { to: "calculator", path: "/calculator", name: "Calculator" },
  ];
  return (
    <div>
      {listMenu &&
        listMenu.map((mn) => (
          <Link to={`${mn.to}`}>
            <p>{mn.name}</p>
          </Link>
        ))}
      <div>{<Outlet />}</div>
    </div>
  );
};

export default OldLayout;
