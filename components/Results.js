function Results() {
  return (
    <div className="flex flex-row ...">
      <div
        className="border-4 border-green-600 border-double
                    bg-green-400 w-full h-96 mx-8"
      >
        <div className={"w-8 h-8 bg-black"}></div>
      </div>

      <div
        className="border-4 border-green-600 border-double
                    bg-green-400 w-full h-96 mx-8 "
      >
        <button
          className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 
    border-gray-300  w-full mt-4"
        >
          Exit Parking
        </button>

        <div className="relative text-gray-700 mt-8 mr-8 mb-8 ml-8">
          <input
            className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Enter parking barcode"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
            Exit
          </button>
        </div>

        {/* <div className="relative text-gray-700">
          <input
            type="text"
            placeholder="Enter parking barcode"
            className="focus:outline-none focus:ring focus:border-blue-300 mt-8 mr-8 mb-8 ml-8 align-middle rounded-lg h-10"
          />
          <input
            className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Enter parking barcode"
          />

          <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
            Exit
          </button>
        </div> */}
      </div>
      {/* <div className="border-r-4 border-indigo-600 ..."></div> */}
    </div>
  );
}

export default Results;
