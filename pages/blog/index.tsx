import type { NextPage } from 'next';
import Head from 'next/head';

import BlogArticles from '../../components/blog/BlogArticles';
import BlogEssential from '../../components/blog/BlogEssential';
import BlogHero from '../../components/blog/BlogHero';
import BlogRecent from '../../components/blog/BlogRecent';
import NewsletterCta from '../../components/blog/NewsletterCta';
import Footer from '../../components/common/Footer';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codini | You think, we create.</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Codini Website" />
        <meta property="og:title" content="Codini | Blog" />
      </Head>
      <BlogHero />
      <BlogRecent />
      <NewsletterCta />
      <BlogEssential />
      <BlogArticles />
      <Footer />
    </>
  );
};

export default Blog;