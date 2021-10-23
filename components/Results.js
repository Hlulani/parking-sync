import React, { useState } from "react";
import ParkingSpace from "./ParkingSpace";
import TicketModal from "./../pages/ticketModal";
import PaymentForm from "../pages/paymentForm";
import PaymentModal from "../pages/PaymentModal";

function Results({ results = [] }) {
  const [selectSpace, selectedSpaces] = useState();
  const [selectedBarcode, setSelectedBarcode] = useState("");
  const [userInputBarcode, setUserInputBarcode] = useState("");
  const [showModal, setTicketModal] = React.useState(false);
  const [showPriceModal, setShowPriceModal] = React.useState(false);
  const [isPaymentPage, setIsPaymentPage] = useState(false);
  const [selectedPaymentButton, setSelectedPaymentButton] = React.useState(0);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [ticketPrice, setTicketPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [exitMessage, setExitMessage] = useState("");

  const onInputChange = (event) => {
    const value = event.target.value;
    setUserInputBarcode(value);
  };

  const handleClick = (spaceId) => {
    selectedSpaces(spaceId);
    const barcode = results.find((item, index) => index === spaceId)?.barcode;
    setSelectedBarcode(barcode);
    console.log("spaceId", spaceId);
  };

  const handlePayment = (payment) => {
    setSelectedPaymentButton(payment);
  };
  console.log("Changed Results", results);

  const handleGetTicketPrice = () => {
    const time = new Date();
    const ticket = JSON.parse(localStorage.getItem("ticket"));
    console.log("ticket.selectedTime", ticket.selectedTime);
    const duration =
      time.getTime() + 1000 * 3600 - new Date(ticket.selectedTime).getTime();
    const hours = duration / (1000 * 3600); // 1hr = 3600s 1s = 1000ms
    const price = hours * 2 > 2 ? hours * 2 : 2;
    console.log("price=", price, "hours=", hours);
    setTicketPrice(price);
    setDuration(hours);
    setShowPriceModal(true);
  };
  
  const getTicketState = (barcode) => {
    try {
      debugger;
      const ticket = JSON.parse(localStorage.getItem("ticket"));
      if(ticket && ticket.barcode === barcode) {
        return ticket.status;
      }
    } catch (error) {
      return "ünpaid";
    }
  };

  const handleExitParking = () => {
    try {
      const ticket = JSON.parse(localStorage.getItem("ticket"));
      const paymentBarcode = ticket.barcode;
      setSelectedBarcode(paymentBarcode);
      const status = getTicketState(userInputBarcode);
      if(status === "paid") {
        localStorage.removeItem('ticket');
        setExitMessage("Exit is successful.");
      } else if(paymentBarcode !== userInputBarcode) {
        setExitMessage("Barcode is invalid.");
      } else {
        setExitMessage("Exit is not successful.");
      }
      console.log("paymentBarcode=", paymentBarcode);
    } catch (error) {
      
    }
  };


  const getBarCode = () => {
    try {
      const ticket = JSON.parse(localStorage.getItem('ticket'));
      return ticket.barcode || "";
    } catch (error) {
      return "";
    }
  }

  return (
    <>
      {!isPaymentPage ? (
        <div className="flex flex-row ...">
          <div
            className="border-4 border-green-600 border-double
                    bg-green-400 w-full h-96 mx-8"
          >
            <div className="text-3xl  mt-8 mr-8  ml-10 font-bold mb-10 text-gray-200 ...">
              GET YOUR PARKING TICKET
            </div>
            <div className="border-4  border-solid bg-white w-99 h-64 mx-8 mt-8">
              <div className="flex flex-row flex-wrap">
                {results.map(({ barcode, index }) => {
                  console.log({ barcode });
                  let color = "gray";
                  if (selectSpace === index) {
                    color = "yellow";
                  }
                  return (
                    <ParkingSpace
                      key={index}
                      color={color}
                      func={handleClick}
                      space={index}
                      setTicketModal={setTicketModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-4 border-green-600 border-double w-full h-96 mx-8 ">
         
            <button
              onClick={handleGetTicketPrice}
              className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
            >
              Get the ticket Price
            </button>
            {exitMessage && <div>{exitMessage}</div>}
            <div className="relative text-gray-700 mt-8 mr-8 mb-8 ml-8">
              <input
                className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Enter parking barcode"
                value={userInputBarcode}
                onChange={onInputChange}
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
              onClick={handleExitParking}
              >
                Exit
              </button>
            </div>
          </div>
          <TicketModal
            showModal={showModal}
            setTicketModal={setTicketModal}
            barcode={selectedBarcode}
            payment={handlePayment}
            setIsPaymentPage={setIsPaymentPage}
          />
        </div>
      ) : (
        <PaymentForm 
        setIsPaymentPage={setIsPaymentPage} 
        barcode={getBarCode()}
        />
      )}
      <PaymentModal
        showPriceModal={showPriceModal}
        setShowPriceModal={setShowPriceModal}
        duration={duration}
        ticketPrice={ticketPrice}
        setIsPaymentPage={setIsPaymentPage}
        barcode={getBarCode()}
      />
    </>
  );
}

export default Results;
