import Contact from "../components/Pages/contact/Contact";
import Header from "../components/common/Header";
import Locationmap from "../components/Pages/contact/Map"
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

const page = () => {
    return ( <>
    <Header/>
    <Contact/>
    <Locationmap />
    <JoiningSafeCare/>
    <Footer/>
    </> );
}
 
export default page;