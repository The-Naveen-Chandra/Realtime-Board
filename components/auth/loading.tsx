import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-1000"
      />
      <h1 className="flex items-center justify-center font-bold text-2xl my-3 animate-pulse duration-1000">
        Realtime-Board
      </h1>
    </div>
  );
};
