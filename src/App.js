import { useEffect } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";
import { useGlobalContext } from "./context";

const App = () => {
	const { objectToArray, results, pages } = useGlobalContext();

	useEffect(() => {
		objectToArray(results);
		// eslint-disable-next-line
	}, [results]);

	return (
		<>
			<header>
				<h1>Wiki Viewer</h1>
			</header>
			<main className={pages[0] ? "active app" : "app"}>
				<Form />
				<div className="results">
					{pages.map((page, index) => (
						<Result {...page} key={index} />
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
