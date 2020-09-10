// import "../styles/globals.css";
import App from "next/app";
import Header from "../pages/Header";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";

class MovieApp extends App {
  // execute initi props for whatever page is accessed
  static async getInitialProps(appContext) {
    // will call getInitialProps function on index page
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
    };
  }

  render() {
    // holds current page
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />

        <NavBar />
        <div className="base-page">
          <Component {...pageProps} />
        </div>

        <Footer />

        <style jsx>
          {`
            .base-page {
              padding-top: 80px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MovieApp;
