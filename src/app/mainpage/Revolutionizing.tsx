"use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";

function Revolutionizing() {
  const [revolutionizingPage, setRevolutionizingPage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("revolutionizing" as any);
      setRevolutionizingPage(response);
    };
    fetchData();
  }, []);
  const isSmallScreen = useMediaQuery("(max-width:440px)");
  return (
    <>
       <div style={{paddingTop:'75px'}}>
        {revolutionizingPage.map((post: any) => (
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
                {post.data.features}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div>
        {revolutionizingPage.map((post: any) => (
          <div key={post.id} style={{textAlign:'center'}}>
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
                  fontSize: { xs: "24px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                  lineHeight: {
                    xs: "36px",
                    sm: "48px",
                    md:"48px",
                    lg: "54px",                         
                    xl: "67.5px",
                  },
                  color: "#0083C3",
                  paddingLeft:isSmallScreen?'20px':'0px'
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
                  fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md:"21px",
                    lg: "24px",
                    xl: "27px",
                  },
                  color: "#0A0A0A",
                  paddingLeft:isSmallScreen?'20px':'0px',
                  paddingRight:{sm:'30px'},
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
        spacing={1}
        sx={{ paddingTop: "17px", gap: {sx:"10px",lg:"32px",md:'32px'}, paddingLeft: {lg:"24px",xs:'20px'} }}
      >
        <Grid
          item
          lg={2.7} 
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA", }}
          
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                  // width:'100px',
                  // background:'red',
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                  {post?.data.ai_powered_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.ai_powered_image.url || undefined}
                      alt={post.data.ai_powered_image.alt || "Image"}
                      style={{
                        width: isSmallScreen?"40px":"80px",
                        height:isSmallScreen?"50px": "100px",
                      }}
                      // onClick={handleNavigation}
                    />
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: {lg:"51px",xs:'29px'},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "27px",
                    md:"27px",
                    lg: "24px",
                    xl: "45px",
                  },
                  }}
                >
                  {post.data.ai_powered}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                 <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.intelligent_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.intelligent_image.url || undefined}
                    alt={post.data.intelligent_image.alt || "Image"}
                    style={{
                      width: isSmallScreen?"40px": "99.91px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: {lg:"51px",xs:'29px'},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                  }}
                >
                  {post.data.intelligent}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.job_description_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.job_description_image.url || undefined}
                    alt={post.data.job_description_image.alt || "Image"}
                    style={{
                      width: isSmallScreen?"40px": "80px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: {lg:"51px",xs:'29px'},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                  }}
                >
                  {post.data.job_description}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.ai_driven_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.ai_driven_image.url || undefined}
                    alt={post.data.ai_driven_image.alt || "Image"}
                    style={{
                      width: isSmallScreen?"40px": "80px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: {lg:"51px",xs:'29px'},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                  }}
                >
                  {post.data.ai_driven}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{ paddingTop: "29px",gap: {sx:"10px",lg:"32px",md:'32px'}, paddingLeft: {lg:"24px",xs:'20px'}}}
      >
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.ai_powered_shortlisting_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      post.data.ai_powered_shortlisting_image.url || undefined
                    }
                    alt={post.data.ai_powered_shortlisting_image.alt || "Image"}
                    style={{
                      // width: "99.48px",
                      // height: "79px",
                      width: isSmallScreen?"40px": "98.76px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingBottom: "51px",
                  // paddingBottom: {xs:'29px'},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                    textAlign:'center',
                    paddingBottom: "51px",
                   
                  }}
                >
                  {post.data.ai_powered_shortlisting}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                  
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.smart_interview_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.smart_interview_image.url || undefined}
                    alt={post.data.smart_interview_image.alt || "Image"}
                    style={{
                      width: isSmallScreen?"40px": "98.76px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                 
                }}
              >
                <Typography
                  sx ={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                    paddingBottom:'30px'
                  }}
                >
                  {post.data.smart_interview}
                </Typography>
              </div>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.video_analytics_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.video_analytics_image.url || undefined}
                    alt={post.data.video_analytics_image.alt || "Image"}
                    style={{
                      // width: "100px",
                      // height: "77.27px",
                      width: isSmallScreen?"40px": "98.76px",
                      height:isSmallScreen?"50px": "100px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                  }}
                >
                  {post.data.video_analytics}
                </Typography>
              </div>
            </div>
          ))}
        </Grid>
        <Grid
          item
          lg={2.7}
          xs={6}
          sx={{ borderRadius: "24px", background: "#FAFAFA" }}
        >
          {revolutionizingPage.map((post: any) => (
            <div key={post.id} style={{textAlign:'center'}}>
             <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingTop: "52px",
                  // paddingBottom: "49px",
                  paddingTop: {lg:"52px",xs:'29px'},
                  paddingBottom:{ lg:"49px",xs:'11px'},
                }}
              >
                <Box
                  sx={{
                    background: "#F4F4F4",
                    // padding: "28px 45px",
                    padding: {lg:"28px 45px",xs:'25px 33px 25px 33px'},
                    borderRadius: "12px",
                  }}
                >
                {post?.data.seamless_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.seamless_image.url || undefined}
                    alt={post.data.seamless_image.alt || "Image"}
                    style={{
                      width: isSmallScreen?"40px": "99.95px",
                      height:isSmallScreen?"50px": "111px",
                    }}
                    // onClick={handleNavigation}
                  />
                )}
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "30px",
                    // lineHeight: "45px",
                    fontSize: { xs: "14px", sm: "18px",md:"18px", lg: "16px", xl: "30px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "27px",
                      md:"27px",
                      lg: "24px",
                      xl: "45px",
                    },
                  }}
                >
                  {post.data.seamless}
                </Typography>
              </Box>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Revolutionizing;
