import { createContext, useContext } from "react";

const appContext = createContext();

const ContextProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [results, setResults] = React.useState();
	const [pages, setPages] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	const objectToArray = (object) => {
		const array = [];
		for (let key in object) {
			array.push(object[key]);
		}
		setPages(array);
	};

	const clear = () => {
		setSearchTerm("");
		setResults({});
	};

	async function fetchPages() {
		try {
			const resp = await fetch(WIKI_API + searchTerm);
			const { query } = await resp.json();
			const { pages } = query;
			setIsLoading(false);
			setResults(pages);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	}

	const clickHandler = (e) => {
		e.preventDefault();
		setIsLoading(true);
		fetchPages();
	};
	return (
		<appContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				results,
				setResults,
				pages,
				setPages,
				isLoading,
				setIsLoading,
				objectToArray,
				clear,
				fetchPages,
				clickHandler,
			}}
		>
			{children}
		</appContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(appContext);
};

export { useGlobalContext, ContextProvider };