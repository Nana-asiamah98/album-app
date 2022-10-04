import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location Value => ", location.state)
  },[]);


  return <div>Navbar</div>;
};

export default Navbar;
