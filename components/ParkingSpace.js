
function ParkingSpace({ space, color, func, setTicketModal }) {
  const handleTicketSelection = () => {
    console.log("spance", space);
    func(space);
    debugger;
    console.log("ínside");
    setTicketModal((isShown) => !isShown);
  };
  return (
    <div className="flex flex-row">
      <div
        className={`w-8 h-8 bg-${color}-400 m-2`}
        onClick={handleTicketSelection}
      ></div>
    </div>
  );
}
export default ParkingSpace;
