"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

function Footer() {
  const [footerPage, setFooterPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("footer" as any);
      setFooterPage(response);
    };
    fetchData();
  }, []);

  const heading: React.CSSProperties = {
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Poppins",
  };

  const subHeading: React.CSSProperties = {
    color: "#FFFFFF",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Poppins",
  };
  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "108.46px", height: "30px" };
    if (isSm) return { width: "108.46px", height: "30px" };
    if (isMd) return { width: "108.46px", height: "30px" };
    if (isLg) return { width: "166.30px", height: "46px" };
    if (isXl) return { width: "166.30px", height: "46px" };
    return { width: "283.55px", height: "433px" };
  };

  const dimensions = getDimensions();
  const router = useRouter();
    const handleNavigation = () => {
      router.push("/");
    };

  return (
    <div>
      <Grid container>
        <Grid
          item
          xl={12}
          lg={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
            background: "#0083C3",
            padding: "10px 24px",
            gap: { xs: "20px" },
          }}
        >
          <Grid item lg={2}>
            {footerPage[0]?.data.footer_logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={footerPage[0]?.data.footer_logo.url || undefined}
                alt={footerPage[0]?.data.footer_logo.alt || "Image"}
                style={{
                  // width: "166px",
                  // height: "46px",
                  width: dimensions.width,
                  height: dimensions.height,
                }}
                onClick={handleNavigation}
              />
            )}
          </Grid>
          <Grid
            item
            lg={1}
            sx={{
              textAlign: { xs: "center", sm: "left", lg: "left", xl: "left" },
              paddingTop: "23px",
            }}
          >
            <Typography
              // style={heading}
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                // fontSize: "16px",
                // lineHeight: "24px",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
                lineHeight: {
                  xs: "21px",
                  sm: "21px",
                  md: "21px",
                  lg: "24px",
                  xl: "24px",
                },
                fontFamily: "Poppins",
              }}
            >
              {footerPage[0]?.data.quick_links}
            </Typography>
            <Typography
              sx={{
                paddingTop: "9px",
                //  ...subHeading
                color: "#FFFFFF",
                fontWeight: 300,
                // fontSize: "16px",
                // lineHeight: "24px",
                fontFamily: "Poppins",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
                lineHeight: {
                  xs: "21px",
                  sm: "21px",
                  md: "21px",
                  lg: "24px",
                  xl: "24px",
                },
              }}
            >
              {footerPage[0]?.data.home}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}
            >
              {footerPage[0]?.data.features}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}
            >
              {footerPage[0]?.data.pricing}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}
            >
              {footerPage[0]?.data.faq}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}
            >
              {footerPage[0]?.data.contact_us}
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            sx={{
              textAlign: { xs: "center", sm: "left", lg: "left", xl: "left" },
              paddingTop: "23px",
            }}
          >
            <Typography 
            // style={heading}
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
              fontFamily: "Poppins",
            }}
            >
              {footerPage[0]?.data.reach_out_to_us}
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "9px",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "row",
                    sm: "column",
                    lg: "row",
                    xl: "row",
                  },
                  gap: "10px",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {footerPage[0]?.data.email_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={footerPage[0]?.data.email_icon.url || undefined}
                    alt={footerPage[0]?.data.email_icon.alt || "Image"}
                    style={{
                      width: "30px",
                      height: "24px",
                    }}
                  />
                )}
                <Typography 
                // style={subHeading}
                sx={{
                  //  ...subHeading
                  color: "#FFFFFF",
                  fontWeight: 300,
                  // fontSize: "16px",
                  // lineHeight: "24px",
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md: "21px",
                    lg: "24px",
                    xl: "24px",
                  },
                }}
                >
                  {footerPage[0]?.data.email}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "row",
                    sm: "column",
                    lg: "row",
                    xl: "row",
                  },
                  gap: "10px",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {footerPage[0]?.data.phone_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={footerPage[0]?.data.phone_icon.url || undefined}
                    alt={footerPage[0]?.data.phone_icon.alt || "Image"}
                    style={{
                      width: "30px",
                      height: "24px",
                    }}
                  />
                )}
                <Typography
                //  style={subHeading}
                sx={{
                  //  ...subHeading
                  color: "#FFFFFF",
                  fontWeight: 300,
                  // fontSize: "16px",
                  // lineHeight: "24px",
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md: "21px",
                    lg: "24px",
                    xl: "24px",
                  },
                }}
                 >
                  {footerPage[0]?.data.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={1}
            sx={{
              textAlign: { xs: "center", sm: "left", lg: "left", xl: "left" },
              paddingTop: "23px",
            }}
          >
            <Typography 
            // style={heading}
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
              fontFamily: "Poppins",
            }}
            >
              {footerPage[0]?.data.follow_us}
            </Typography>
            <Typography 
            // style={{ paddingTop: "9px", ...subHeading }}
            sx={{
              //  ...subHeading
              paddingTop: "9px",
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}
            >
              {footerPage[0]?.data.linkedin_text}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}

            >
              {footerPage[0]?.data.facebook_text}
            </Typography>
          </Grid>
          <Grid
            item
            lg={1.5}
            sx={{
              textAlign: { xs: "center", sm: "left", lg: "left", xl: "left" },
              paddingTop: "23px",
            }}
          >
            <Typography 
            // style={heading}
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
              fontFamily: "Poppins",
            }}
            >{footerPage[0]?.data.legal}</Typography>
            <Typography
            //  style={{ paddingTop: "9px", ...subHeading }}
            sx={{
              //  ...subHeading
              paddingTop: "9px",
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}

             >
              {footerPage[0]?.data.privacy_policy}
            </Typography>
            <Typography 
            // style={subHeading}
            sx={{
              //  ...subHeading
              color: "#FFFFFF",
              fontWeight: 300,
              // fontSize: "16px",
              // lineHeight: "24px",
              fontFamily: "Poppins",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "16px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "24px",
              },
            }}

            >
              {footerPage[0]?.data.terms_and_conditions}
            </Typography>
          </Grid>
          <Grid item lg={2} sx={{ textAlign: "center", paddingTop: "33px"}}>
            <div>
            <Button
              sx={{
                background: "#FFFFFF",
                color: "#0083C3",
                fontWeight: 500,
                // fontSize: "16px",
                // lineHeight: "24px",
                fontSize: { xs: "16px", sm: "14px",md:"14px", lg: "16px", xl: "16px" },
                lineHeight: {
                  xs: "24px",
                  sm: "21px",
                  md:"21px",
                  lg: "24px",                         
                  xl: "24px",
                },
                fontFamily: "Poppins",
                textTransform: "none",
                borderRadius: "12px",
                padding:{lg:'12px 65px 12px 65px',xs:'12px 100px 12px 100px',sm:'12px 100px 12px 100px',xl:'12px 100px 12px 100px',md:'12px 100px 12px 100px'},
              }}
              onClick={()=>{
                window.location.href =
                "https://aippoint.ai/aippoint-userinterface/";
              }}
            >
              {footerPage[0]?.data.button_text_trynow}
            </Button>
            </div>
            <div style={{paddingTop:'10px'}}>
            <Button
              sx={{
                border: '1px solid #FFFFFF',
                color: "#FFFFFF",
                fontWeight: 500,
                // fontSize: "16px",
                // lineHeight: "24px",
                fontSize: { xs: "16px", sm: "14px",md:"14px", lg: "16px", xl: "16px" },
                lineHeight: {
                  xs: "24px",
                  sm: "21px",
                  md:"21px",
                  lg: "24px",                         
                  xl: "24px",
                },
                fontFamily: "Poppins",
                textTransform: "none",
                borderRadius: "12px",
                padding:{lg:'12px 30px 12px 30px',xs:'12px 60px 12px 60px',sm:'12px 60px 12px 60px',xl:'12px 60px 12px 60px'},
              }}
            >
              {footerPage[0]?.data.button_text}
            </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
