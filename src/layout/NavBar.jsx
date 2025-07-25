import { NavLink } from "react-router-dom"
export default function NavBar() {
	return (
		<>
			<nav
				className="nav justify-content-center p-3 display-6 d-flex justify-content-around " >
				<NavLink className="nav-link text-primary   " to="/">Home Page</NavLink>
				<NavLink className="nav-link text-primary" to="pageA">Biografia</NavLink>
				<NavLink className="nav-link text-primary" to="pageB">Prodotti</NavLink>

			</nav>
		</>
	)

}