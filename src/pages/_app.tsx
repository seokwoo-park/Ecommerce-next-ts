import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import { CategoriesNav } from "../components/index";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <CategoriesNav /> */}
      <Component {...pageProps} />
    </>
  );
}

export default Application;
