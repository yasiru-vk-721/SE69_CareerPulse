

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-5">
      <input
        type="text"
        placeholder="Search by job type or location"
        className="w-[800px] p-7 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
  );
};



export default SearchBar;