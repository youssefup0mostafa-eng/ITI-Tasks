import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" href="https://youssef-mostafa-portfolio-jet.vercel.app/">YM.</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'/Hero'}>Hero</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to={''} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to={'/Gallery'}>Gallery</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'Cat'}>Cats</NavLink></li>
                </ul>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>

        </>
    );
};