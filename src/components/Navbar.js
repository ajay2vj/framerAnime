import { React } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../styling/style.css";

function NavBar() {
    return (
        <motion.div>
					<Navbar collapseOnSelect expand="lg" bg="dark">
							<Navbar.Brand href="#home"><motion.div whileHover={{ scale: 1.2, rotate: 360 }}
							whileTap={{
								scale: 0.8,
								rotate: -90,
								borderRadius: "100%"
							}}>PizzaHut</motion.div></Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="ml-auto">
											<NavLink to="/" className="nav-link">Home</NavLink>
											<NavLink to="/about" className="nav-link">About</NavLink>
											<NavLink to="/contact-us" className="nav-link">Contact</NavLink>
									</Nav>
							</Navbar.Collapse>
					</Navbar>
      </motion.div>
    )
}
export default NavBar;