import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef } from "react";

import { MainPage } from "./pages/MainPage";

export const App = () => {
  const marioRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && !isJumping.current && marioRef.current) {
        event.preventDefault();
        isJumping.current = true;
        marioRef.current.classList.add("jump");

        setTimeout(() => {
          marioRef.current?.classList.remove("jump");
          isJumping.current = false;
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <div className="background"></div>
      <div className="mario" ref={marioRef}></div>
      <Analytics />
      <SpeedInsights />
      <MainPage />
    </>
  );
};
