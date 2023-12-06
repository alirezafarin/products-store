import { Loader } from "@/app/_assets/ts";
import { en } from "@/app/_dictionary/en";

export const LoadingComponent = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div role="status">
        <Loader />
      </div>
      <p className="w-1/3 text-center text-white">{en.loadingDescription}</p>
    </div>
  );
};
