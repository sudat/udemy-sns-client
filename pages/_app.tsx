import Navbar from "@/src/components/Navbar";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "@/src/context/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
