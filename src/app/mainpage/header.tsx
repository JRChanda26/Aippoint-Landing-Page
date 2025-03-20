"use client";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Button,
  Drawer,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

function Header() {
  const [headerPage, setHeaderPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("header" as any);
      setHeaderPage(response);
    };
    fetchData();
  }, []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:440px)");
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };

  const handleContactNavigation = () => {
    router.push("/contact");
  };
  const handlePricingNavigation = () => {
    router.push("/pricing");
  };
  const handleFeatureNavigation = () => {
    router.push("/feature");
  };
  const handleFaqNavigation = () => {
    router.push("/faq");
  };
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
    <>
      {isSmallScreen ? (
        <div style={{ }}>
          {headerPage.map((post: any) => (
            <div
              key={post.id}
              style={{ paddingLeft: "20px", paddingTop: "12px" ,display: "flex", width: "100%",justifyContent:'space-between' ,paddingRight:'20px'}}
            >
              {post?.data.header_logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.header_logo.url || undefined}
                  alt={post.data.header_logo.alt || "Image"}
                  style={{
                    width: "108.46px",
                    height: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleNavigation}
                />
              )}

              <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                  color: "#24535C",
                }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          ))}

          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <div style={{ width: 250, padding: "20px",background:isDarkMode?'#000':'',height:'100%' }}>
              {headerPage.map((post: any) => (
                <div key={post.id}>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                      paddingBottom:'10px',
                      // color:'#0A0A0A'
                      color:isDarkMode?'#fff':'#0A0A0A'
                    }}
                    onClick={handleNavigation}
                  >
                    {post.data.home}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                       paddingBottom:'10px',
                      //  color:'#0A0A0A'
                      color:isDarkMode?'#fff':'#0A0A0A'
                    }}
                    onClick={handleFeatureNavigation}
                  >
                    {post.data.features}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                       paddingBottom:'10px',
                      //  color:'#0A0A0A'
                      color:isDarkMode?'#fff':'#0A0A0A'
                    }}
                    onClick={handlePricingNavigation}
                  >
                    {post.data.pricing}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                       paddingBottom:'10px',
                      //  color:'#0A0A0A'
                      color:isDarkMode?'#fff':'#0A0A0A'
                    }}
                    onClick={handleFaqNavigation}
                  >
                    {post.data.faq}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                       paddingBottom:'10px',
                      //  color:'#0A0A0A'
                      color:isDarkMode?'#fff':'#0A0A0A'
                    }}
                    onClick={handleContactNavigation}
                  >
                    {post.data.contact}
                  </Typography>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      ) : (
        <Grid container style={{ paddingTop: "20px" }}>
          <Grid item lg={2.3} sm={2} md={2} xl={2}>
            {headerPage.map((post: any) => (
              <div
                key={post.id}
                style={{ paddingLeft: "24px", paddingTop: "12px" }}
              >
                {post?.data.header_logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.header_logo.url || undefined}
                    alt={post.data.header_logo.alt || "Image"}
                    style={{
                      width: isSmallScreen ? "108.46px" : "166.31px",
                      height: isSmallScreen ? "30px" : "46px",
                      cursor: "pointer",
                    }}
                    onClick={handleNavigation}
                  />
                )}
              </div>
            ))}
          </Grid>
          <Grid item lg={6} md={6} sm={6} xl={7} sx={{paddingTop:{sm:'5px'}}}>
            {headerPage.map((post: any) => (
              <div
                key={post.id}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: "23px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // color:'#0A0A0A'
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                  onClick={handleNavigation}
                >
                  {post.data.home}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // color:'#0A0A0A',
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                  onClick={handleFeatureNavigation}
                >
                  {post.data.features}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // color:'#0A0A0A'
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                  onClick={handlePricingNavigation}
                >
                  {post.data.pricing}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // color:'#0A0A0A'
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                  onClick={handleFaqNavigation}
                >
                  {post.data.faq}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // color:'#0A0A0A'
                    color:isDarkMode?'#fff':'#0A0A0A'
                  }}
                  onClick={handleContactNavigation}
                >
                  {post.data.contact}
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid item lg={3.5} md={4} sm={4} xl={3} sx={{paddingTop:{sm:'10px'}}} >
            {headerPage.map((post: any) => (
              <div
                key={post.id}
                style={{ paddingTop: "5px", display: "flex", gap: "10px" }}
              >
                <Button
                  sx={{
                    background: "#0083C3",
                    color: "#FFFFFF",
                    textTransform: "none",
                    padding: {  lg:"12px 54px 11px 53px",xl:'18px 73px 18px 72px',md:"9px 37px 9px 37px",sm:"9px 37px 9px 37px"},
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    fontSize: {
                      xs: "16px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    lineHeight: {
                      xs: "24px",
                      sm: "18px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    },

                    // width: "209px",
                    borderRadius: "12px",
                  }}
                  onClick={() => {
                    window.location.href =
                      "https://aippoint.ai/aippoint-userinterface/";
                  }}
                >
                  {post.data.try_now}
                </Button>
                <Button
                  sx={{
                    // background: "#0083C3",
                    border: isDarkMode?'1px solid #FFFFFF':'1px solid #0A0A0A',
                    // color: "#0A0A0A",,
                    color:isDarkMode?'#fff':'#0A0A0A',
                    textTransform: "none",
                    padding: { lg:"12px 19px 11px 19px",xl:'18px 38px 18px 38px',md:"9px 11px 9px 11px",sm:"9px 11px 9px 11px"},
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    fontSize: {
                      xs: "16px",
                      sm: "12px",
                      md: "12px",
                      lg: "16px",
                      xl: "16px",
                    },
                    lineHeight: {
                      xs: "24px",
                      sm: "18px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    },
                    borderRadius: "12px",
                  }}
                >
                  {post.data.button_text}
                </Button>
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Header;
