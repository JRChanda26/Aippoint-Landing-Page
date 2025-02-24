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
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      {isSmallScreen ? (
        <div style={{ }}>
          {headerPage.map((post: any) => (
            <div
              key={post.id}
              style={{ paddingLeft: "24px", paddingTop: "12px" ,display: "flex", width: "100%",justifyContent:'space-between' }}
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
                  // onClick={handleNavigation}
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
            <div style={{ width: 250, padding: "20px" }}>
              {headerPage.map((post: any) => (
                <div key={post.id} style={{ marginBottom: "10px" }}>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.home}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.features}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.pricing}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.faq}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
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
          <Grid item sm={2} md={2} lg={2}>
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
                    // onClick={handleNavigation}
                  />
                )}
              </div>
            ))}
          </Grid>
          <Grid item lg={6}>
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
                  }}
                >
                  {post.data.home}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {post.data.features}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {post.data.pricing}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {post.data.faq}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {post.data.contact}
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid item lg={4}>
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
                    padding: { lg: "18px 73px 18px 72px" },
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
                    background: "#0083C3",
                    color: "#FFFFFF",
                    textTransform: "none",
                    padding: { lg: "18px 38px 18px 38px" },
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
