import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoClub from "@/components/InfoClub";
import MainPage from "@/components/MainPage";
import News from "@/components/News";

function HomePage() {
  return (
    <>
      <Header />
      <MainPage />
      <InfoClub />
      <div className="bg-gray-100">
        <h2 className="text-black text-center pt-8  mt-6 md:text-3xl md:mt-16 mb-3 font-light text-2xl">
          Novedades del Club
        </h2>
        <News maxItems={3} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
