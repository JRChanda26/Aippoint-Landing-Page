import Head from "next/head";
import Contact from "./mainpage/contact";
import Faq from "./mainpage/faq";
import Footer from "./mainpage/footer";
import Header from "./mainpage/header";
import Hire from "./mainpage/Hirethebest";
import Ourvalueproposition from "./mainpage/Ourvalueproposition";
import Revolutionizing from "./mainpage/Revolutionizing";
import Scheduledemo from "./mainpage/ScheduleFreeDemo";
import Subscription from "./mainpage/Subscription";

export default function Home() {
  return (
    <>
    <Head>
        <title>AI Interview Platform | Practice Real Job Interviews with AI</title>
        {/* Shown in Google search description part */}
        <meta name="description" content="AI-driven mock interview platform to practice job interviews. Get real-time feedback and improve your skills. Free demo available!" />
        <meta name="keywords" content="AI interview, mock interview, job interview preparation, AI mock interview platform, interview coaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph For Facebook, LinkedIn part*/ } 
        <meta property="og:title" content="AI Interview Practice Platform" />
        <meta property="og:description" content="Practice interviews with our AI-powered simulator and improve your confidence." />
        <meta property="og:image" content="/Brandname.png" />
        <meta property="og:url" content="https://aippoint.ai" />
        <meta property="og:type" content="website" />
        {/* Twitter Card For Twitter/X part*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Interview Platform" />
        <meta name="twitter:description" content="Try our AI-powered interview simulation app. Free practice sessions, instant feedback." />
        <meta name="twitter:image" content="/Brandname.png" />
        <link rel="canonical" href="https://aippoint.ai" />
      </Head>
    <div>
      <Header/>
      <Hire/>
      <Ourvalueproposition/>
      <Revolutionizing/>
      <Subscription/>
      <Faq/>
      <Contact/>
      {/* <Scheduledemo/> */}
      <Footer/>
    </div>
    </>
  )
}
