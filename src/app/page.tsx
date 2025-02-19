import Contact from "./mainpage/contact";
import Footer from "./mainpage/footer";
import Header from "./mainpage/header";
import Hire from "./mainpage/Hirethebest";
import Ourvalueproposition from "./mainpage/Ourvalueproposition";
import Revolutionizing from "./mainpage/Revolutionizing";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hire/>
      <Ourvalueproposition/>
      <Revolutionizing/>
      <Contact/>
      <Footer/>
    </div>
  )
}
