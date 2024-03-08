import type { NextPage } from 'next';
import Head from 'next/head';

import Cta from '../components/common/Cta';
import Decks from '../components/home/Decks';
import Footer from '../components/common/Footer';
import Formating from '../components/home/Formating';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import News from '../components/home/News';
import Sharing from '../components/home/Sharing';
import Testimonials from '../components/home/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codini | Home</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Codini is a software development company that helps businesses grow, by developing and maintaining their websites and mobile apps."
        />
        <meta property="og:title" content="Codini | Home" />
      </Head>
      <Hero />
      <Formating />
      <Decks />
      {/* <Intro /> */}
      <Sharing />
      <News />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
