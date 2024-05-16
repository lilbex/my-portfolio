import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Elias Imokhai</title>
        <meta name="description" content="A seasoned software engineer" />
      </Head>
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
