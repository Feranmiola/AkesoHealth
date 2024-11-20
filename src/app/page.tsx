import Logo from "./Icons/Logo";


export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="flex flex-row items-center py-10 space-x-2">
        <Logo />
        <p className="font-plus-jakarta text-gray font-bold text-[22.2px]">Akeso<span className="font-normal">Health</span></p>

      </div>

    </div>
  );
}
