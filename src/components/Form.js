import React from "react";
import { useGlobalContext } from "../context";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import Loading from "./Loading";

const Form = () => {
	const { clickHandler, searchTerm, setSearchTerm, clear, isLoading } =
		useGlobalContext();
	return (
		<form className="form" onSubmit={clickHandler}>
			<button type="submit" title="search">
				<BiSearch className="search-icon" />
			</button>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search For Anything"
			/>
			<Loading isLoading={isLoading} />

			<button title="clear" type="reset">
				<ImCancelCircle className="cancel-icon" onClick={clear} />
			</button>
		</form>
	);
};
export default Form;
