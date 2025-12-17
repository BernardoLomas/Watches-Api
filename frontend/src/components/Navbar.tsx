import { useCart } from "../context/CartContext";

interface Props {
    onCartClick?: () => void;
}

export default function Navbar ({ onCartClick }: Props) {
    const { items } = useCart();

    return (
        <nav className="navbar">
            <strong>Bernardo Lomas Watches</strong>
            <button className="navbar-cart" onClick={onCartClick}>Cart({items.length})</button>
        </nav>
    );
}