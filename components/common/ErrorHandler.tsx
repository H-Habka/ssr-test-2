import React from "react";
import { useGlobalStore } from "@store/globalStore";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";

const ErrorHandler = () => {
  const errorMsg = useGlobalStore((state) => state.errorMsg);

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg);
    }
  }, [errorMsg]);

  return <Toaster position="top-center" toastOptions={{ duration: 3000 }} />;
};

export default ErrorHandler;
