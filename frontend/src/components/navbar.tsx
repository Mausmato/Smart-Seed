import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

const Navbarr = () => {
  return (
    <Navbar className="bg-black bg-opacity-10 backdrop-blur-lg py-5 fixed top-0 w-full z-30">
      <NavbarBrand className="!flex items-center h-full pt-0">
        <div className="!p-0">
          <Link to="/home">
            <Logo></Logo>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent
        className="text-white hidden sm:flex gap-6 ml-auto items-center h-full font-bold pr-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <NavbarItem>
          <Link to="/home"color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to ="/analyze"  aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to=""  aria-current="page">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbarr;
