import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="container-lg d-flex justify-content-between align-items-center">
                <div className="brand d-flex align-self-end">
                    <h1 className="m-0 p-0">.DEV</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-links d-flex gap-5 m-0 ">
                        <li className="nav-link p-0"><Link to="/" className="text-decoration-none link">Home</Link></li>
                        <li className="nav-link p-0"><Link to="/about" className="text-decoration-none link ">About</Link></li>
                        <li className="nav-link p-0"><Link to="/projects" className="text-decoration-none link">Projects</Link></li>
                        <li className="nav-link p-0"><Link to="/contact" className="text-decoration-none link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;