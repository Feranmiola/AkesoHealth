/* eslint-disable */
import ForwardIcon from "./Icons/ForwardIcon";
import Logo from "./Icons/Logo";


export default function Home() {
  return (
    <div className="w-screen flex flex-col bg-[#F8F8F8] items-center justify-center">
      <div className="h-[717px] flex flex-col items-center  w-full">
        <div className="flex flex-row items-center py-10 space-x-2">
          <Logo />
          <p className="font-plus-jakarta text-gray font-bold text-[22.2px]">Akeso<span className="font-normal">Health</span></p>
        </div>
        <div className="flex flex-col items-center h-[290px] justify-between">
          <p className="font-plus-jakarta font-medium w-[672px] text-center leading-[4rem] tracking-tight text-[70px] text-gray2">Smarter Healthcare, <span className="text-light-blue">Better</span> Lives.</p>
          <p className="w-[481px] text-gray3 text-base text-center">At Akeso Health, we’re transforming healthcare for patients and providers alike. By making technology work for everyone, we’re creating a future where your health comes first.</p>

          <div className="flex flex-row focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[440px] h-[60px] space-x-2  rounded-2xl bg-white p-2">
            <input
              type="email"
              placeholder="Enter e-mail address"
              className=" flex-1 flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
            />
            <div className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer">
              <p className="text-white font-medium text-base">Join Waitlist</p>
              <ForwardIcon />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
