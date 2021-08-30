import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const App = () => {
	React.useEffect(() => {
		objectToArray(results);
	}, [results]);

	return (
		<>
			<header>
				<h1>Wiki Viewer</h1>
			</header>
			<main className={pages[0] ? "active app" : "app"}>
				<Form
					clickHandler={clickHandler}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					isLoading={isLoading}
					clear={clear}
				/>
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
