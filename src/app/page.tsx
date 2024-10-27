import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <div className={`${montserrat.variable}`}>
      <div className="font-sans"></div>
      {/* Below Container */}
      <div
        className="w-[1046px] h-auto mx-auto mt-[104px] pt-[40px] pb-[40px] flex flex-col items-center"
        style={{ height: "1046px" }}
      >
        {/* Welcome Header */}
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23A6F0]">
          Welcome
        </h5>

        {/* Main Header */}
        <h1
          className="font-montserrat font-bold text-center text-white pt-[40px]"
          style={{
            width: "560px",
            height: "160px",
            fontSize: "58px",
            lineHeight: "80px",
            letterSpacing: "0.2px",
            marginTop: "15px",
            alignContent: "center",
          }}
        >
          Selling on the internet like a pro
        </h1>

        {/* Sub Header */}
        <h4
          className="font-montserrat font-medium text-center mt-[10px] text-white pt-[40px] pb-[40px]"
          style={{
            width: "536px",
            height: "60px",
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "0.2px",
            marginTop: "35px",
          }}
        >
          We know how large objects will act, but things on a small scale do not
          act that way.
        </h4>

        {/* Call-to-Action Buttons */}
        <div className=" flex space-x-4 mt-[20px] w-[326px] h-[52px] pt-[40px]">
          <Link
            href="/get-quote"
            className="bg-blue-500   text-white rounded-[5px] px-[25px] py-[10px] text-[14px] font-bold leading-[22px] tracking-[0.2px] flex items-center justify-center mr-[-10px]"
            style={{
              width: "193px",
              height: "52px",
            }}
          >
            Get Quote Now
          </Link>

          {/* Learn More Button */}
          <Link
            href="/learn-more"
            className="border border-[#23A6F0] pt-15px rounded-[5px] flex items-center justify-center"
            style={{
              width: "162px",
              height: "52px",
            }}
          >
            <span
              className="font-montserrat font-bold text-[#23A6F0] leading-[22px] tracking-[0.2px] text-center "
              style={{
                fontSize: "14px",
              }}
            >
              Learn More
            </span>
          </Link>
        </div>

        {/* Boxes Row */}
        <div className=" flex gap-0 mt-10  pt-[120px] pb-[35px] pr-[1px] pl-[3px] " >
          {/* Box 1 */}
          <div
            className="flex items-center justify-center "
            style={{
              width: "363px",
              height: "302px",
              opacity: "1",
              position: "relative",
              overflow: "hidden",
              marginRight: "0",
            }}
          >
            <img
              src="/images/1.png"
              alt="Image 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Box 2 */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "363px",
              height: "302px",
              opacity: "1",
              position: "relative",
              overflow: "hidden",
              marginRight: "0",
            }}
          >
            <img
              src="/images/2.png"
              alt="Image 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "363px",
              height: "302px",
              opacity: "1",
              position: "relative",
              overflow: "hidden",
              marginRight: "0",
            }}
          >
            <img
              src="/images/3.png"
              alt="Image 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
