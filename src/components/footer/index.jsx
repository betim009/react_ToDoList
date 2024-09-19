import { Link } from "react-router-dom";
import './layout.css'

export default function Footer() {
    return (
        <nav className="my-nav">
           <Link to="/">Home</Link>
           <Link to="/create">Cadastrar</Link>
        </nav>
    ) 
}