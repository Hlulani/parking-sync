import React, { useEffect, useState } from "react";
import BarcodeComponent from "./barcodeComponent";
import Image from "next/image";
import parking from "../img/parking-2.png";

function TicketModal({showModal, setTicketModal, barcode,  setIsPaymentPage}) {
  const [selectedPaymentButton, setSelectedPaymentButton] = React.useState(0);
  const [selectedTime, setSelectedTime] = useState(new Date());
  

  useEffect(() => {
    console.log('çalled', showModal)
   try {
     if(showModal) {
      const time = new Date();
      setSelectedTime(time);
      debugger;
      localStorage.setItem('ticket', JSON.stringify({
        barcode,
        selectedTime,
        status: 'unpaid'
      }));
     }
   } catch (error) {
     console.log('érror', error)
   }
  }, [showModal]);

  const handleChange = (event, newValue) => {
    setSelectedPaymentButton(newValue);
  };

  const handleProceedToPayment = () => {
    setTicketModal(false);
    setIsPaymentPage(true);
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Welcome to Park.Sync
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setTicketModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="  h-32 w-32 ...">
                    <Image
                      className="object-contain"
                      src={parking}
                      width={150}
                      height={200}
                      alt=""
                    />
                    {/* <BarcodeComponent barcode={barcode}/> */}
                  </div>
                  <div className="divide-y-4 divide-black divide-dashed mt-8">
                    <div className="mt-10"></div>
                    <div className="text-center text-3xl font-bold mb-10  align-middle">Parking Receipt</div>
                    <div className="font-bold"></div>
                  </div>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   From: {selectedTime.toString()}
                  </p>

                  <BarcodeComponent barcode={barcode}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setTicketModal(false)}
                  >
                    Close
                   
                  </button>
                  <button
                    className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
                    type="button"
                    onClick={()=>{
                      const time = new Date();
                      setSelectedTime(time);
                      
                      localStorage.setItem('ticket', JSON.stringify({
                        barcode,
                        selectedTime: time,
                        status: 'unpaid'
                      }));
                      setTicketModal(false);
                      console.log("saved", { barcode,
                        selectedTime :time,})
                    }}
                  >
                   Save Ticket
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
       
        </>
       
      ) : null}

{/* <button onClick={()=>{
            const time = new Date();
            const ticket = JSON.parse(localStorage.getItem('ticket'));
            console.log('ticket.selectedTime', ticket.selectedTime)
            const duration = time.getTime()+ 1000 * 3600 * 4 - new Date(ticket.selectedTime).getTime();
            const hours = duration / (1000 * 3600); // 1hr = 3600s 1s = 1000ms
            const price = hours * 2 > 2 ? hours * 2 : 2;
            console.log('price=', price, "hours=", hours)


          }} className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Make Payment
          </button> */}
    </>
    
  );
}
export default TicketModal;
