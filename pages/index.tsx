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
        <title>Home | Codini, you think, we create</title>
        <meta property="og:type" content="website" />
        <meta name="title" content="Home | Codini" />
        <meta
          name="description"
          content="Codini is a software development company that helps businesses grow, by developing and maintaining their websites and mobile apps."
        />
        <meta
          name="keywords"
          content="software,react,development,frontend,backend,web,website,application,mobile,ios,android,nextjs,vuejs,angular,flutter,api,server,deployment,devops,security,ecommerce,payment,tunisia,company,javascript,typescript"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Chadi Ayari" />

        <meta
          property="og:description"
          content="Codini is a software development company that helps businesses grow, by developing and maintaining their websites and mobile apps."
        />
        <meta property="og:title" content="Home | Codini" />
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
