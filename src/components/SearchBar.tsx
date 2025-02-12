const SearchBar = () => {
    return (
        <div className="flex items-center w-full max-w-lg bg-white rounded-md shadow-md overflow-hidden">
            {/* Input */}
            <input
                type="text"
                placeholder="Find our courses"
                className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            />

            {/* Tombol Search */}
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300">
                Search
            </button>
        </div>
    )
}

export default SearchBar;