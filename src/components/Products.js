import React, { useState, useEffect } from "react";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);

	let componentMounted = true;

	useEffect(() => {
		setLoading(true);

		fetch("http://localhost:8000/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
				setLoading(false);
			});
	}, []);

	const Loading = () => {
		return <>Loading....</>;
	};

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className="buttons d-flex justify-content-center mn-5 pb-5">
					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => setFilter(data)}
					>
						All
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterProduct("feeds")}
					>
						Farmazon feeds
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterProduct("tools")}
					>
						Farmazon tools
					</buttons>

					<buttons
						className="btn btn-outline-dark me-3"
						onClick={() => filterProduct("fertilizers")}
					>
						Farmazon fertilizers
					</buttons>
				</div>
				{filter.map((product) => {
					return (
						<>
							<div className="col-md-3 mb-4">
								<div className="card h-100 text-center p-4" key={product.id}>
									<img
										src={product.image_url}
										className="card-img-top"
										alt={product.name}
										height="250px"
									/>
									<div className="card-body">
										<h5 className="card-title mb-0">
											{product.name.substring(0, 12)}
										</h5>
										<p className="card-text lead fw-bold">${product.price}</p>
										<button className="btn btn-outline-dark">
											Purchase Now
										</button>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</>
		);
	};
	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Latest Products</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</div>
	);
};
export default Products;
