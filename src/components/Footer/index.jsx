import { NavLink } from "react-router-dom";
import "./layout.css";

export default function Footer() {
  return (
    <footer>
      <nav className="my-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Cadastrar</NavLink>
      </nav>
    </footer>
  );
}
