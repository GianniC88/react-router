import { useParams } from "react-router-dom";
export default function SingleProduct() {
	const { id } = useParams()
	return (
		<h1>single product</h1>
	)
}