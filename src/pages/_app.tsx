import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/context/ThemeContext";
import { AudioProvider } from "@/context/AudioContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeTransition from "@/components/ThemeTransition";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AudioProvider>
      <ThemeProvider>
        <ThemeTransition />
        <Navbar />
        <main className="pt-16 flex-grow relative">
          <Component {...pageProps} />
        </main>
        {router.pathname !== "/" && <Footer />}
      </ThemeProvider>
    </AudioProvider>
  );
}
