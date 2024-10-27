import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" font-montserrat">
      <div className="flex items-center justify-between h-[91px] w-[1322px] mx-auto">
        {/* Brand Name and Navigation Links */}
        <div className="flex items-center space-x-[21px]">
          {/* Brand Name */}
          <div
            className="text-2xl font-bold leading-8 tracking-[0.1px] font-Montserrat text-white mt-17 ml-[136px]"
            style={{ width: "187px", height: "58px", marginTop: "17px" }}
          >
            BrandName
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-[21px]">
            <Link
              href="/"
              className="h-[24px] w-[43px] text-[14px] font-semibold leading-24 tracking-[0.2px] text-center font-mon text-white"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="h-[24px] w-[59px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center font-montserrat text-white"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="h-[24px] w-[52px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center font-montserrat text-white"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="h-[24px] w-[58px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center font-montserrat text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Login and Join Us Links */}
        <div className="flex items-center  space-x-[45px]  mr-[136px]">
          <Link
            href="/login"
            className=" h-[24px] w-[43px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center font-montserrat text-white"
          >
            Login
          </Link>

          {/* Join Us Button */}
          <Link
            href="/join"
            className="bg-blue-500 text-white rounded-[5px] pr-[20px] pl-[25px] pt-[15px] pb-[15px] text-[14px] font-semibold leading-[22px] tracking-[0.2px] font-montserrat flex items-center"
            
          >
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
}
