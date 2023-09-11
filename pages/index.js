import ClubMap from "@/components/ClubMap";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoClub from "@/components/InfoClub";
import MainPage from "@/components/MainPage";
import News from "@/components/News";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Aero Club Rafaela</title>
      </Head>
      <Header />
      <MainPage />
      <InfoClub />
      <div className="bg-gray-100">
      <h2 className="text-center pt-12 mt-6 md:text-4xl md:mt-16 mb-3 font-normal text-3xl" style={{ background: 'linear-gradient(to right, #4EACF2, #004691)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
  Novedades del Club
</h2>
        <News maxItems={3} />
      </div>
      <ClubMap />
      <Footer />
    </>
  );
}

export default HomePage;
