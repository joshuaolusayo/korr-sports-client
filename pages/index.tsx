import Head from 'next/head';
import Nav from 'reusable/Nav';
import Banner from 'homepage/Banner';
import AllSports from 'homepage/AllSports';
import VisitNews from 'homepage/VisitNews';
import SelectSport from 'homepage/SelectSport';
import Subscriber from 'reusable/Subscriber';
import Footer from 'reusable/Footer';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Offical Korr Sports Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <Banner />
      <SelectSport />
      <AllSports />
      <VisitNews />
      <AllSports />
      <Subscriber />
      <Footer />
    </div>
  );
}
