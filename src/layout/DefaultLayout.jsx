import { Outlet } from "react-router-dom";
export default function () {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>

	)
}
import(Outlet)