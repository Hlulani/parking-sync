import { useEffect } from "react";

function PaymentModal({showPriceModal, setShowPriceModal,  ticketPrice, duration, setIsPaymentPage,barcode }) {
    
    useEffect(() => {

    }, []);

    const handleProceed = () => {
        setIsPaymentPage(true);
        setShowPriceModal(false);
    }

    return (
        <>
        {showPriceModal ? (
        <>
        <div className="container flex justify-center mx-auto">
        <button className="px-6 py-2 text-white bg-blue-600 rounded shadow-xl" type="button">open
            model</button>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="max-w-sm p-6 bg-white divide-y divide-gray-500">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl">Proceed to payment</h3>
                   <div onClick={() => setShowPriceModal(false)}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                   </div>
    
                </div>
                <div className="mt-4">
                    <h1 className="mb-4 text-sm font-semibold">Thank you for visiting Parking Sync</h1>

                    <p className = "mb-4 text-sm" >Ticket Price: {ticketPrice.toFixed(2)}</p>
                    <p className = "mb-4 text-sm" >Hours spent: {duration}</p>
                    <p className = "mb-4 text-sm" >Barcode: {barcode}</p>
                    <button className="px-4 py-2 text-white bg-red-600 rounded" onClick={() => setShowPriceModal(false)}>Cancel</button>
                    <button className="px-4 py-2 text-white bg-green-600 rounded" onClick={handleProceed}>Proceed To Payment</button>
                </div>
            </div>
        </div>
    </div>

    </>
       
       ) : null}
    </>
    );
}

export default PaymentModal

