import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cocktails">Cocktails</Link>
        </>
      );
}
 export default Navbar;