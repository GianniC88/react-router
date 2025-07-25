
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


export default function DefaultLayout() {
	return (
		<>


			<header>
				<NavBar />
			</header>

			<Outlet />
			<footer>Footer</footer>
		</>

	)
}