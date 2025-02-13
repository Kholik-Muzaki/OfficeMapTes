const SearchBar = () => {
    return (
        <div className="relative w-full sm:w-3/4">
            {/* Input dengan padding kanan untuk tombol */}
            <input
                type="text"
                placeholder="Find our courses"
                className="w-full px-4 py-3 pr-20 text-gray-700 border border-gray-300 rounded-md shadow-md focus:outline-none"
            />

            {/* Tombol di dalam input */}
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
