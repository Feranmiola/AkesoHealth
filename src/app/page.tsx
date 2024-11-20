import Logo from "./Icons/Logo";


export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="h-[717px] flex flex-col items-center  w-full">
        <div className="flex flex-row items-center py-10 space-x-2">
          <Logo />
          <p className="font-plus-jakarta text-gray font-bold text-[22.2px]">Akeso<span className="font-normal">Health</span></p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-plus-jakarta font-medium w-[672px] text-center leading-[4rem] tracking-tight text-[70px] text-gray2">Smarter Healthcare, <span className="text-light-blue">Better</span> Lives.</p>


        </div>
      </div>

    </div>
  );
}
