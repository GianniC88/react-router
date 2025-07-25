
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
export default function DefaultLayout() {
	return (
		<>
			<NavBar />
			<header>
				<HomePage />
				<PageA />
				<PageB />
			</header>
			<Outlet />
			<footer>Footer</footer>
		</>

	)
}