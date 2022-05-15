import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import { Footer, Header, HomeLayout } from "../components/index";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
      <Footer />
    </>
  );
}

export default Application;
