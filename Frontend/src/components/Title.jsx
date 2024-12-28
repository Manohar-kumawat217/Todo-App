import Logo from "./Logo";

export default function Title() {
  return (
    <div className=" p-4 sm:py-4 sm:p-1 font-bold text-2xl text-white bg-gray-800 flex flex-col jusify-center items-center text-center w-full ">
      <h2 className="flex items-center w-full ">
        <Logo />
        <div className="ml-8">Task Manager</div>
      </h2>
    </div>
  );
}
