import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black py-3">
      <div className="container-fluid fs-5">
        {/* Brand */}
        <Link className="nav-link text-warning opacity-75 active" to="/">
        <img
        src="/logo.png"
        alt="Vintage Tent Logo"
        style={{ height: "25px", marginRight: "10px" }}
      />
        Vintage Tent
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Our Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-warning opacity-75 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </a>
              <ul className="dropdown-menu bg-black opacity-75">
                <li><Link className="dropdown-item text-warning" to="/services">Wedding and Event Tents</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Lighting and Sound</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Decor</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Tables and Chairs</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Flooring and Staging</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Guest Comfort</Link></li>
                <li><hr className="dropdown-divider border-warning opacity-75" /></li>
                <li><Link className="dropdown-item text-warning" to="/services">Something else here</Link></li>
              </ul>
            </li>

            {/* Events Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-warning opacity-75 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu bg-black opacity-75">
                <li><Link className="dropdown-item text-warning" to="/services">Wedding</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Birthday Party</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Baby Shower</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Festivals</Link></li>
                <li><Link className="dropdown-item text-warning" to="/services">Concert</Link></li>
                <li><hr className="dropdown-divider border-warning opacity-75" /></li>
                <li><Link className="dropdown-item text-warning" to="/services">Something else here</Link></li>
              </ul>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <Link className="nav-link text-warning opacity-75" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning opacity-75" to="/book">Contact</Link>
            </li>
          </ul>

          {/* Book Now button */}
          <Link className="btn btn-dark border-warning text-warning opacity-75 fs-5" to="/book">Book Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

