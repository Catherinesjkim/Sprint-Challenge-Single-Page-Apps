import React from "react";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm />
    </header>
    <nav>
      <Link to="/">Welcome!</Link>
    </nav>
    </div>
  );
}
