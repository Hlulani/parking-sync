import Image from "next/image";
import logo from "../img/11.png";

function header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between  h-auto">
      {/* <h1>This is the header</h1> */}

      <div className="relative h-32 w-32 ...">
        <div className="absolute top-0 right-0 h-32 w-32 ...">
          <Image
            className="object-contain"
            src={logo}
            width={300}
            height={100}
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
export default header;
