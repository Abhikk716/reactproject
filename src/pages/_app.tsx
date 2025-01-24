import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Keep this line if you have custom styles
import 'aos/dist/aos.css';
import AOS from 'aos'; // Import AOS JS

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
