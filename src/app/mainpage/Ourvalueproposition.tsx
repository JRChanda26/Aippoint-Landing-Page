"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
function Ourvalueproposition() {
  const [ourvaluePage, seturvaluePage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType(
        "ourvalueproposition" as any
      );
      seturvaluePage(response);
    };
    fetchData();
  }, []);
  const isSmallScreen = useMediaQuery("(max-width:440px)");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeQuery.matches);
      darkModeQuery.addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
    };

    checkDarkMode();
  }, []);

  return (
    <div style={{paddingLeft:isSmallScreen?'20px':'0px'}}>
      <div style={{paddingTop:'65px'}}>
        {ourvaluePage.map((post: any) => (
          <div key={post.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "47px",
              }}
            >
              <Typography
                style={{
                  color: "#0083C3",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                  border: "0.5px solid #0083C3",
                  borderRadius: "100px",
                  padding: "17px 50px 16px 51px",
                }}
              >
                {post.data.values}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div>
        {ourvaluePage.map((post: any) => (
          <div key={post.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "25px",
                
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  // fontSize: "45px",
                  // lineHeight: "67.5px",
                  paddingLeft:{sm:'30px'},
                  paddingRight:{sm:'30px'},
                  fontSize: { xs: "24px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                  lineHeight: {
                    xs: "36px",
                    sm: "48px",
                    md:"48px",
                    lg: "54px",
                    xl: "67.5px",
                  },
                  color: "#0083C3",
                }}
              >
                {post.data.top_heading}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  // fontSize: "18px",
                  // lineHeight: "27px",
                  paddingLeft:{sm:'30px'},
                  paddingRight:{sm:'30px'},
                  fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md:"21px",
                    lg: "24px",
                    xl: "27px",
                  },
                  // color: "#0A0A0A",
                  color:isDarkMode?'#fff':'#0A0A0A'
                }}
              >
                {post.data.top_content}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <Grid
        container
        spacing={0}
        sx={{ gap: "28px", paddingTop: "25px",display:'flex',justifyContent:'center' }}
      >
        <Grid item lg={7} xs={11} sx={{ borderRadius: "24px", background: isDarkMode?'#1C1C1C':"#FAFAFA" ,marginRight:isSmallScreen?'20px':''}}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    // fontSize: "16px",
                    // lineHeight: "24px",
                    fontSize: { xs: "16px", sm: "16px",md:"16px", lg: "16px", xl: "16px" },
                    lineHeight: {
                      xs: "24px",
                      sm: "24px",
                      md:"24px",
                      lg: "24px",
                      xl: "24px",
                    },
                    color: "#0083C3",
                    border: isDarkMode?'0.5px solid #0083C3':"0.5px solid #0A0A0A",
                    background:isDarkMode?'#1C1C1C':'',
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "220px",
                    textAlign:'center'
                  }}
                >
                  {post.data.hiring_process}
                </Typography>
              </div>
              <Box sx={{ 
                // paddingTop: "50px",
                paddingTop:isSmallScreen?'25px':'20px',
                 paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A'

                  }}
                >
                  {post.data.faster_hiring_heading}
                </Typography>
              </Box>
              <div style={{ 
                // paddingTop: "50px",
                paddingTop:isSmallScreen?'25px':'20px',
                 paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "18px",
                    // lineHeight: "27px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "24px",
                      xl: "27px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                    paddingRight: {lg:"233px",md:'233px',xl:'233px',xs:'144px'},
                  }}
                >
                  {post.data.faster_hiring_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "54px",
                  // paddingTop: "50px",
                  paddingLeft: "29px",
                  // paddingBottom: "38px",
                  paddingTop:isSmallScreen?'25px':'20px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    paddingBottom: "38px",
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    color: "#0083C3",
                  }}
                >
                  {post.data.faster_hiring_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={4} xs={11} sx={{ borderRadius: "24px", background: isDarkMode?'#1C1C1C':"#FAFAFA" ,marginRight:isSmallScreen?'20px':''}}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: { xs: "16px", sm: "16px",md:"16px", lg: "16px", xl: "16px" },
                    lineHeight: {
                      xs: "24px",
                      sm: "24px",
                      md:"24px",
                      lg: "24px",
                      xl: "24px",
                    },
                    color: "#0083C3",
                    border: isDarkMode?'0.5px solid #0083C3':"0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "220px",
                    textAlign:'center'
                  }}
                >
                  {post.data.candidate_matching}
                </Typography>
              </div>
              <div style={{
                //  paddingTop: "41px",
                  paddingLeft: "29px",paddingTop:isSmallScreen?'25px':'20px', }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                >
                  {post.data.smart_matching_heading}
                </Typography>
              </div>
              <div style={{ 
                // paddingTop: "41px", 
                paddingLeft: "29px",paddingTop:isSmallScreen?'25px':'20px', }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "18px",
                    // lineHeight: "27px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "24px",
                      xl: "27px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                    paddingRight: "37px",
                  }}
                >
                  {post.data.smart_matching_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "55px",
                  // paddingTop: "50px",
                  paddingLeft: "29px",
                  // paddingBottom: "38px",
                  paddingTop:isSmallScreen?'25px':'20px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    paddingBottom: "38px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    color: "#0083C3",
                  }}
                >
                  {post.data.smart_matching_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        sx={{ gap: "28px", paddingTop: "25px", display:'flex',justifyContent:'center'}}
      >
        <Grid item lg={4} xs={11} sx={{ borderRadius: "24px", background: isDarkMode?'#1C1C1C':"#FAFAFA" ,marginRight:isSmallScreen?'20px':''}}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: isDarkMode?'0.5px solid #0083C3':"0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "220px",
                    textAlign:'center'
                  }}
                >
                  {post.data.hiring_cost}
                </Typography>
              </div>
              <div style={{
                //  paddingTop: "41px", 
                 paddingLeft: "29px" ,paddingTop:isSmallScreen?'25px':'20px',}}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                  }}
                >
                  {post.data.cost_efficient_heading}
                </Typography>
              </div>
              <div style={{
                //  paddingTop: "41px", 
                paddingTop:isSmallScreen?'25px':'20px',
                 paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "18px",
                    // lineHeight: "27px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "24px",
                      xl: "27px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                    paddingRight: "37px",
                  }}
                >
                  {post.data.cost_efficient_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "59px",
                  // paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
                  paddingTop:isSmallScreen?'25px':'20px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    color: "#0083C3",
                  }}
                >
                  {post.data.cost_efficient_score}
                </Typography>
                {/* {post?.data.downward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.downward_image.url || undefined}
                    alt={post.data.downward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={7} xs={11} sx={{ borderRadius: "24px", background: isDarkMode?'#1C1C1C':"#FAFAFA",marginRight:isSmallScreen?'20px':''}}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: isDarkMode?'0.5px solid #0083C3':"0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "220px",
                    textAlign:'center'
                  }}
                >
                  {post.data.assistance}
                </Typography>
              </div>
              <div style={{
                //  paddingTop: "50px", 
                paddingTop:isSmallScreen?'25px':'20px',
                 paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                  }}
                >
                  {post.data.ai_assistance_heading}
                </Typography>
              </div>
              <div style={{
                //  paddingTop: "50px",
                paddingTop:isSmallScreen?'25px':'20px',
                  paddingLeft: "29px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "18px",
                    // lineHeight: "27px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "24px",
                      xl: "27px",
                    },
                    // color: "#0A0A0A",
                    color:isDarkMode?'#fff':'#0A0A0A',
                    // paddingRight: "233px",
                    paddingRight: {lg:"233px",md:'233px',xl:'233px',xs:'144px'},
                  }}
                >
                  {post.data.ai_assistance_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "57px",
                  // paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
                  paddingTop:isSmallScreen?'25px':'20px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    // lineHeight: "67.5px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "67.5px",
                    },
                    color: "#0083C3",
                  }}
                >
                  {post.data.ai_assistance_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
export default Ourvalueproposition;
