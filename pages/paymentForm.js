
function PaymentForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Complete Payment
          </h2>
  
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-bold text-gray-500">Barcode</label>
              <input
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                type="text"
                placeholder="Enter parking barcode"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-bold text-gray-500">Card Number</label>
              <input
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                type="text"
                placeholder="Enter card number"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-bold text-gray-500">
              Expiration (mm/yy)
              </label>
              <input
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                type="text"
                placeholder="Enter expiration"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
               Security Code
              </label>
              <input
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                type="text"
                placeholder="Enter security code"
              />
            </div>
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default PaymentForm;
  