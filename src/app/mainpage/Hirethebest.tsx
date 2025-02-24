"use client";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

function Hire() {
  const [hirePage, setHirePage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("hirethebest" as any);
      setHirePage(response);
    };
    fetchData();
  }, []);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
   const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "400px", height: "334.24px" };
    if (isSm) return { width: "755.62px", height: "691px" };
    if (isMd) return { width: "755.62px", height: "691px" };
    if (isLg) return { width: "753.24px", height: "629.41px" };
    if (isXl) return { width: "912.71px", height: "762.67px" };
    return { width: "283.55px", height: "433px" };
  };

  const dimensions = getDimensions();

  return (
    <>
      <Grid container spacing={0}>
        <Grid item lg={5.8}>
          {hirePage.map((post: any) => (
            <div key={post.id}>
              <Box sx={{
                paddingLeft: {xs:"16px",sm:"35px",md:"35px",lg:"25px",xl:"20px"},
                paddingTop:{xs:"55px",sm:"72.19px",md:"72.19px",lg:"215px",xl:"283px"} 
            }}>
                <Typography
                  sx={{ 
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "45px",
                    fontSize: { xs: "24px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                    // lineHeight: "67.5px",
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
                  {post.data.heading}
                </Typography>
              </Box>
              <Box sx={{  paddingLeft: {xs:"16px",sm:"35px",md:"35px",lg:"25px",xl:"20px"}, }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "18px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                    // lineHeight: "27px",
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "24px",
                      xl: "27px",
                    },
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.content}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection:isSmallScreen?"column":"row",
                  
                  gap: "24px",
                  paddingLeft: {xs:"16px",sm:"35px",md:"35px",lg:"25px",xl:"20px"},
                  paddingTop: {xs:"25px",sm:"30px",md:"30px",lg:"25px",xl:"25px"},
                }}
              >
                <div style={{}}>
                  <Button
                    sx={{
                      textTransform: "none",
                      background: "#0083C3",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      width:isSmallScreen?'100%':'auto',
                      // padding: "18px 58px 18px 59px",
                      padding:{lg:'18px 73px 18px 72px'},
                      fontWeight:500,
                      fontFamily:'Poppins',
                      fontSize: { xs: "16px", sm: "12px",md:"12px", lg: "16px", xl: "16px" },
                      lineHeight: {
                        xs: "24px",
                        sm: "18px",
                        md:"18px",
                        lg: "24px",
                        xl: "24px",
                      },
                    }}
                    
                    onClick={() => {
                      window.location.href = "https://aippoint.ai/aippoint-userinterface/";
                    }}
                  >
                    {post.data.getstarted_button}
                  </Button>
                </div>
                <div style={{}}>
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      color: "#0A0A0A",
                      width:isSmallScreen?'100%':'auto',
                      border: "1px solid #0A0A0A",
                      // padding: "18px 38px 18px 38px",
                      padding:{lg:'18px 38px 18px 38px'},
                      fontWeight:500,
                      fontFamily:'Poppins',
                      fontSize: { xs: "16px", sm: "12px",md:"12px", lg: "16px", xl: "16px" },
                      lineHeight: {
                        xs: "24px",
                        sm: "18px",
                        md:"18px",
                        lg: "24px",
                        xl: "24px",
                      },
                    }}
                  >
                    {post.data.requestdemo_button}
                  </Button>
                </div>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid item lg={6.2}>
          {hirePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "40px",paddingBottom:'25px',paddingRight:'33.29px' }}>
                {post?.data.hire_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.hire_image.url || undefined}
                    alt={post.data.hire_image.alt || "Image"}
                    style={
                      {
                          // width: "912.71px",
                          // height: "762.67px",
                          width: dimensions.width,
                          height: dimensions.height,
                      }
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Hire;
