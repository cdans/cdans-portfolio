import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { MainPage } from "./pages/MainPage";

export const App = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <MainPage />
    </>
  );
};
