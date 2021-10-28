import "../styles/main.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col bg-black h-screen font-mono">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
