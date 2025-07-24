import { NavLink } from "react-router-dom"
export default function NavBar() {
	return (
		<>
			<nav
				className="nav justify-content-center ">
				<NavLink className="nav-link" to="/">Home Page</NavLink>
				<NavLink className="nav-link" to="pageA">pageA</NavLink>
				<NavLink className="nav-link" to="pageB">PageB</NavLink>
			</nav>
		</>
	)

}