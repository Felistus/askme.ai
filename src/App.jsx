import "./App.css";
import { Suspense, lazy } from "react";
import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import CustomFonts from "./components/CustomFonts";
import Logo from "./components/global/Logo";

const Home = lazy(() => import("./pages/home"));

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          primary: ["#228B22"],
          neutral: ["#F7F7F7", "#1E2028", "#323442", "#EDEEF3"],
          white: ["#FFFFFF"],
          secondary: ["#4723C2"],
        },
      }}
    >
      <Suspense
        fallback={
          <div className="w-full h-screen pt-16 flex items-center justify-center">
            <div
              style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo />
            </div>
          </div>
        }
      >
        <CustomFonts />
        {/* <Notifications position="top-center" /> */}
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Suspense>
    </MantineProvider>
  );
}
