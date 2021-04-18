import "tailwindcss/tailwind.css";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen text-white">
      <Navbar />

      <div style={{ height: "90vh" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
