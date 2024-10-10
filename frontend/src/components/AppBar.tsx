

export const AppBar = () => {
  return (
    <div className="bg-black text-white p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Medium</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 rounded-full py-1 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" /> */}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:bg-gray-800 p-2 rounded-full">
          {/* <Edit className="h-5 w-5" /> */}
        </button>
        <button className="hover:bg-gray-800 p-2 rounded-full">
          {/* <Bell className="h-5 w-5" /> */}
        </button>
        <button className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center font-bold text-3xl  ">
          U
        </button>
      </div>
    </div>
  );
};
