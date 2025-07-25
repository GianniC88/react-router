
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";

export default function DefaultLayout() {
	return (
		<>


			<header>
				<NavBar />
			</header>
			<HomePage />
			<Outlet />
			<footer>Footer</footer>
		</>

	)
}