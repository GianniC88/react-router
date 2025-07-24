
import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
export default function DefaultLayout() {
	return (
		<>
			<NavBar />
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>

	)
}
