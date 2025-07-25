import { useState, useEffect } from "react"

export default function PageB() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await fetch('https://fakestoreapi.com/products');
				if (!response.ok) {
					throw new Error('Errore nel caricamento dei prodotti');
				}
				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);



	return (
		<>
			<h2>Prodotti</h2>
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-md-4 mb-4">
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
					</div>
				))}
			</div>
		</>
	);
}