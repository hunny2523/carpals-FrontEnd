import './navbar.css'
import { useHistory,Link,useLocation } from 'react-router-dom';

export default function Navbar() {
    const history=useHistory();
    const location=useLocation();

    const handleLogOut=()=>{
        localStorage.removeItem("user");
        history.push("/login");
        window.location.reload();
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-color navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Carpals
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/findRide"?"active":""}`} to="/findRide">Find A Ride</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control navbar-search me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success navbar-search-button" type="submit">Search</button>
                        </form>
                        <button className='btn btn-danger' onClick={handleLogOut}>logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
