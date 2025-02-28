"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { client } from "../../../lib/prismic-configuration";
import Header from "../mainpage/header";
import Footer from "../mainpage/footer";

function Faq() {
  const [faqPage, setFaqPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("faq" as any);
      setFaqPage(response);
    };
    fetchData();
  }, []);

  const faqs = [
    {
      question: faqPage[0]?.data.question1,
      answer: faqPage[0]?.data.answer1,
    },
    {
      question: faqPage[0]?.data.question2,
      answer: faqPage[0]?.data.answer2,
    },
    {
      question: faqPage[0]?.data.question3,
      answer: faqPage[0]?.data.answer3,
    },
    {
      question: faqPage[0]?.data.question4,
      answer: faqPage[0]?.data.answer4,
    },
    {
      question: faqPage[0]?.data.question5,
      answer: faqPage[0]?.data.answer5,
    },
    {
      question: faqPage[0]?.data.question6,
      answer: faqPage[0]?.data.answer6,
    },
    {
      question: faqPage[0]?.data.question7,
      answer: faqPage[0]?.data.answer7,
    },
    {
      question: faqPage[0]?.data.question8,
      answer: faqPage[0]?.data.answer8,
    },
    {
      question: faqPage[0]?.data.question9,
      answer: faqPage[0]?.data.answer9,
    },
    {
      question: faqPage[0]?.data.question10,
      answer: faqPage[0]?.data.answer10,
    },
  ];

  const [clicked, setClicked] = useState<number | null>(0);
  const handleColor = (index: number) => {
    setClicked(clicked === index ? null : index);
    // setClicked(index);
  };

  const heading: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
    letterSpacing: "0%",
    color: "#0083C3",
  };

  const title: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "45px",
    fontWeight: 700,
    lineHeight: "67.5px",
    letterSpacing: "0%",
    color: "#0083C3",
    paddingTop: "25px",
  };
  const isSmallScreen = useMediaQuery("(max-width:440px)");


  return (
    <>
    <Header/>
    <div style={{paddingTop:'50px',textAlign:'center'}}>
       <Typography
            sx={{
              border: "1px solid #0083C3",
              borderRadius: "100px",
              width: "155px",
              display: "inline-block",
              //   margin: "0 auto",
              padding: "17px",
              ...heading,
            }}
          >
            {faqPage[0]?.data.heading}
          </Typography>
          <Typography 
          // sx={title}
          sx={{fontFamily: "Poppins",
            fontWeight: 700,
            // fontSize: "45px",
            // lineHeight: "67.5px",
            fontSize: { xs: "24px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
            lineHeight: {
              xs: "36px",
              sm: "48px",
              md:"48px",
              lg: "54px",                         
              xl: "67.5px",
            }, 
            paddingLeft:isSmallScreen?'20px':'0px',
            letterSpacing: "0%",
            color: "#0083C3",         
            paddingTop: "25px",}}
          > {faqPage[0]?.data.title}</Typography>
      <Grid container>
        {/* <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
            marginTop: "70px",
            paddingLeft:{sm:'200px'},
          }}
        > */}
          {/* <Typography
            sx={{
              border: "1px solid #0083C3",
              borderRadius: "100px",
              width: "155px",
              display: "inline-block",
              //   margin: "0 auto",
              padding: "17px",
              ...heading,
            }}
          >
            {faqPage[0]?.data.heading}
          </Typography> */}
         
        {/* </Grid> */}
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
          sx={{
            marginTop: "50px",
            paddingRight:'10px',
            paddingLeft:'10px'
          }}
        >
          {faqs.slice(0, 10).map((faq, index) => (
            <div key={index}>
              <Accordion
                expanded={clicked === index}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <KeyboardArrowDownIcon
                      onClick={() => handleColor(index)}
                      sx={{
                        //   color: clicked === index ? "#3D8C6E" : "#292F36",
                        color: "#0A0A0A",
                      }}
                    />
                  }
                >
                  <Typography
                    onClick={() => handleColor(index)}
                    sx={{
                      // color: clicked === index ? "#3D8C6E" : "#292F36",
                      color: "#0A0A0A",
                      // lineHeight: "27px",
                      // fontSize: "18px",
                      fontSize: { xs: "12px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                      lineHeight: {
                        xs: "18px",
                        sm: "21px",
                        md:"21px",
                        lg: "24px",                         
                        xl: "27px",
                      }, 
                      fontWeight: 400,
                      fontFamily: "Poppins",
                      letterSpacing: "0%",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#0083C3",
                      // lineHeight: "24px",
                      // fontSize: "16px",
                      fontSize: { xs: "12px", sm: "14px",md:"14px", lg: "14px", xl: "16px" },
                      lineHeight: {
                        xs: "18px",
                        sm: "21px",
                        md:"21px",
                        lg: "21px",                         
                        xl: "24px",
                      }, 
                      fontWeight: 400,
                      fontFamily: "Poppins",
                      letterSpacing: "0%",
                      textAlign: "left",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <hr style={{ border: "0.5px solid #0A0A0A" }} />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
    <div style={{paddingTop:'15px'}}>
        <Footer/>
      </div>
    </>
  );
}

export default Faq;
