"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { en } from "../_dictionary/en";
import { BaseButton } from "../_components/Base";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // report error to some error reporter
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-slate-600 gap-2">
      <h2 className="text-2xl font-bold text-white">{en.errorMsg}</h2>
      <BaseButton onClick={() => reset()} type="error">
        {en.tryAgain}
      </BaseButton>
    </div>
  );
}
