import { useCart } from "../context/CartContext";
import logo from "../assets/coroa-removebg-preview.png";

interface Props {
    onCartClick?: () => void;
}

export default function Navbar ({ onCartClick }: Props) {
    const { items } = useCart();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="logo"></img>
            </div>
            <button className="navbar-cart" onClick={onCartClick}>Cart({items.length})</button>
        </nav>
    );
}