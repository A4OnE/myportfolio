import "../styles/globals.css";
import style from "../styles/Scss/mainFile.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={style} />;
}

export default MyApp;
