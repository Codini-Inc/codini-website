import type { NextPage } from 'next';
import Head from 'next/head';

import BlogEssential from '../../components/blog/BlogEssential';
import BlogHero from '../../components/blog/BlogHero';
import BlogRecent from '../../components/blog/BlogRecent';
import NewsletterCta from '../../components/blog/NewsletterCta';
import Footer from '../../components/common/Footer';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Codini</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Blog | Codini" />
      </Head>
      <BlogHero />
      <BlogRecent />
      <NewsletterCta />
      <BlogEssential />
      <Footer />
    </>
  );
};

export default Blog;
