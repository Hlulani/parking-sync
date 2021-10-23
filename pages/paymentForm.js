import { useEffect, useState } from "react";

function PaymentForm({ setIsPaymentPage, barcode }) {
  // const [selectedBarcode , setSelectedBarcode] = useState("");
  const [ticketStatus, setTicketStatus] = useState("unpaid");

  const getTheTicketState = (barcode) => {
    const ticket = JSON.parse(localStorage.getItem("ticket"));
    if (setIsPaymentPage = true) {
      ticket.status = "paid";
      console.log("Make payments", { barcode });
      console.log("ticket", ticket);
    } else{
      ticket.status = "unpaid";
    }
  };

  const handleGoBack = () => {
    setIsPaymentPage(false);
  };

  const handleMakePayment = () => {
    try {
      const ticket = JSON.parse(localStorage.getItem("ticket"));
      if(ticket) {
        ticket.status = "paid";
        localStorage.setItem('ticket', JSON.stringify(ticket));
      }
    } catch (error) {
      console.log('érror making payment');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Complete Payment
        </h2>
        <a href="#" onClick={handleGoBack}>
          Go Back
        </a>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Barcode {barcode}
            </label>
            {/* <input
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                type="text"
                placeholder="Enter parking barcode"
              /> */}
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Card Number
            </label>
            <input
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              type="text"
              placeholder={"112222222222"}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Expiration (mm/yy)
            </label>
            <input
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              type="text"
              placeholder={"01/29"}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Security Code
            </label>
            <input
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              type="text"
              placeholder={"123456"}
            />
          </div>
          <button
          
            className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
            onClick={handleMakePayment}
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
