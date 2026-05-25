"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import ErrorOverlay from "./ErrorOverlay";

const BUBBLE_HINT = "https://www.diabetes.org.uk/node/12895";
const HELP_HINT = "https://5pillarsuk.com/2026/02/07/human-appeal-usa-paid-fundraiser-khaled-beydoun-2-million/";

type ErrorOverlayContextType = {
  triggerPanic: (hintUrl: string) => void;
};

const ErrorOverlayContext = createContext<ErrorOverlayContextType>({
  triggerPanic: () => {},
});

export function useErrorOverlay() {
  return useContext(ErrorOverlayContext);
}

export function ErrorOverlayProvider({ children }: { children: React.ReactNode }) {
  const [hintUrl, setHintUrl] = useState<string | null>(null);

  const triggerPanic = useCallback((url: string) => {
    setHintUrl((current) => current ? current : url);
  }, []);

  const handleClose = useCallback(() => {
    setHintUrl(null);
  }, []);

  useEffect(() => {
    const onBubblePop = () => triggerPanic(BUBBLE_HINT);
    const onHelpClick = () => triggerPanic(HELP_HINT);

    window.addEventListener("bubble-popped", onBubblePop);
    window.addEventListener("help-clicked", onHelpClick);
    return () => {
      window.removeEventListener("bubble-popped", onBubblePop);
      window.removeEventListener("help-clicked", onHelpClick);
    };
  }, [triggerPanic]);

  return (
    <ErrorOverlayContext.Provider value={{ triggerPanic }}>
      {children}
      {hintUrl && <ErrorOverlay hintUrl={hintUrl} onClose={handleClose} />}
    </ErrorOverlayContext.Provider>
  );
}
