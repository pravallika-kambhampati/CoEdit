import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>CoEdit</h1>
      <Outlet />
    </>
  );
};
