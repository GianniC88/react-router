
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../pages/Footer";


export default function DefaultLayout() {
	return (
		<>


			<header>
				<NavBar />
			</header>

			<Outlet />

			<Footer />

		</>

	)
}