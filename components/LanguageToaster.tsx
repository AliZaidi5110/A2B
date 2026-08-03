"use client";

import { Toaster } from "sonner";

export function LanguageToaster() {
  return (
    <Toaster
      position="top-center"
      richColors={false}
      closeButton
      toastOptions={{
        duration: 2800,
        classNames: {
          toast: "a2b-toast",
          title: "a2b-toast-title",
          closeButton: "a2b-toast-close",
        },
      }}
    />
  );
}
