import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
	const { id } = useParams();
	const apiUrl = `https://fakestoreapi.com/products/${id}`;
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(apiUrl)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
			})
	}, [apiUrl]);

	if (!product) {
		return (
			<div className="container my-5">
				<h2>Caricamento...</h2>
			</div>
		);
	}

	return (
		<>
			<h1>Prodotto{id}</h1>
			<div className="card h-100">
				<img
					className="card-img-top"
					src={product.image}
					alt={product.title}
					style={{ height: '200px', objectFit: 'contain' }}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{product.title}</h5>
					<p className="card-text flex-grow-1">
						{product.description.length > 100
							? product.description.substring(0, 100) + '...'
							: product.description
						}
					</p>
					<div className="mt-auto">
						<span className="badge bg-primary">{product.category}</span>
						<h6 className="text-success mt-2">${product.price}</h6>
					</div>
				</div>
			</div>
		</>
	)
}