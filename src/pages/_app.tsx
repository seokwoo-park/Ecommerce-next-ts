import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import { CategoriesNav, Footer, Header, Layout } from "../components/index";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* <CategoriesNav /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default Application;
