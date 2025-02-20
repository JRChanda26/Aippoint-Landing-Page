import Contact from "./mainpage/contact";
import Faq from "./mainpage/faq";
import Footer from "./mainpage/footer";
import Header from "./mainpage/header";
import Hire from "./mainpage/Hirethebest";
import Ourvalueproposition from "./mainpage/Ourvalueproposition";
import Revolutionizing from "./mainpage/Revolutionizing";
import Subscription from "./mainpage/Subscription";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hire/>
      <Ourvalueproposition/>
      <Revolutionizing/>
      <Subscription/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}
