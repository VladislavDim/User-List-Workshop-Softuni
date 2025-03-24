import { useState } from "react";

export default function Search({
    onSearch
}) {
    const [inputValue, setInputValue] = useState(""); 
    const [selectedCriteria, setSelectedCriteria] = useState(""); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCriteriaChange = (e) => {
        setSelectedCriteria(e.target.value);
    };

    const handleSearchClick = (e) => {
        e.preventDefault(); 
        onSearch(inputValue, selectedCriteria);
    };

    return (
        <form className="search-form">
            <h2>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="user"
                    className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                    ></path>
                </svg>
                <span>Users</span>
            </h2>
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Please, enter search term"
                    name="search"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {/* Show the clear button only if input field length !== 0 */}
                <button
                    className="btn close-btn"
                    onClick={(e) => {
                        e.preventDefault()
                        setInputValue("")
                    }} // Изчистваме input полето
                    style={{ display: inputValue ? "block" : "none" }} // Скриваме бутона, ако няма стойност в input
                >
                    <i className="fa-solid fa-xmark" />
                </button>
                <button
                    className="btn"
                    title="Search"
                    onClick={handleSearchClick} // Извикваме onSearch при натискане на бутона
                >
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className="filter">
                <span>Search Criteria:</span>
                <select
                    name="criteria"
                    className="criteria"
                    value={selectedCriteria}
                    onChange={handleCriteriaChange}
                >
                    <option value="notSelected">Not selected</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="email">Email</option>
                    <option value="phoneNumber">Phone</option>
                </select>
            </div>
        </form>
    );
}
