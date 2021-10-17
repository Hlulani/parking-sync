
function ParkingSpace({space, color, func}) {
   
    return (
        <div className = "flex flex-row">
        <div className={`w-8 h-8 bg-${color}-400 m-2`} onClick={()=>func(space)}></div>
        </div>
    );
}

export default ParkingSpace
