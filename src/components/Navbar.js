import { React } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styling/style.css";

function NavBar() {
    return (
        <>
					<Navbar collapseOnSelect expand="lg" bg="dark">
							<Navbar.Brand href="#home">PizzaHut</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="ml-auto">
											<NavLink to="/" className="nav-link">Home</NavLink>
											<NavLink to="/about" className="nav-link">About</NavLink>
											<NavLink to="/contact-us" className="nav-link">Contact</NavLink>
									</Nav>
							</Navbar.Collapse>
					</Navbar>
      </>
    )
}
export default NavBar;