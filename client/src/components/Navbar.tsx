import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <Link to="/">
                    <h1>Workout Tracker</h1>
                </Link>
            </div>
        </>
    );
}

export default Navbar;