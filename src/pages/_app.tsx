import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <Navbar />
      <main className="pt-16 flex-grow relative">
        <Component {...pageProps} />
      </main>
      {router.pathname !== "/" && <Footer />}
    </ThemeProvider>
  );
}
