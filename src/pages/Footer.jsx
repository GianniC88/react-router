import { useState, useEffect } from "react";

export default function Footer() {
	return (
		<footer className=" text-white mt-auto ">
			<div className="container py-4">
				<div className="row">
					<div className="col-md-6">
						<h5>Il Mio Sito</h5>
						<p className="mb-0">© 2025 Tutti i diritti riservati</p>
					</div>
					<div className="col-md-6">
						<div className="d-flex justify-content-md-end">
							<ul className="list-unstyled d-flex mb-0">
								<li className="me-3">
									<a href="/privacy" className="text-white text-decoration-none">Privacy</a>
								</li>
								<li className="me-3">
									<a href="/termini" className="text-white text-decoration-none">Termini</a>
								</li>
								<li>
									<a href="/contatti" className="text-white text-decoration-none">Contatti</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);

}