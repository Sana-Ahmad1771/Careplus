import { AboutUsPage } from "../components/Pages/about-us/About-us-page";
import { OurKeyStrength } from "../components/Pages/about-us/Pharmagrade-section";
import Header from "../components/common/Header";
import QualityCertification from "../components/Pages/home/QualityCertification";
import Footer from "../components/common/Footer";
import { StorageRoom } from "../components/Pages/about-us/Storageroom-section";
import CleanRoom from "../components/Pages/about-us/Cleanrooms";

const page = () => {
  return (
    <div>
      <Header />
      <AboutUsPage />
      <CleanRoom />
      <StorageRoom />
      <OurKeyStrength />
      <QualityCertification />
      <Footer />
    </div>
  );
};

export default page;
