import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav = styled.div`
display:flex;
background:lightsalmon;
padding:4%;
gap:20px;
font-size: 25px;
font-weight:bold;
`;

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/login">Login</NavLink>
        </div>
        <div>
          <NavLink to="/books">Books</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
      </Nav>
    </>
  );
};
