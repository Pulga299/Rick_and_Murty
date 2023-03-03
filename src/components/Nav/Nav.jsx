import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav>
      <Link to='/'>LOGOUT</Link>
      <Link to='/about'>About</Link>
      <Link to='/home'>Home</Link>
      <Link to='/favorites'>Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
