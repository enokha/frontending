import { Link } from "react-router-dom";

// CSS
import "../styles/page-not-found.css";

const PageNotFound = () => {
	return (
		<main className="not-found">
			<span>404</span>
			<h2>Oops! This page does not exist</h2>
			<Link to="/">Return Home</Link>
		</main>
	);
};

export default PageNotFound;
