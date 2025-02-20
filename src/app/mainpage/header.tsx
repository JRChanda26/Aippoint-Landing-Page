"use client";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Button, Grid, Typography } from "@mui/material";

function Header() {
  const [headerPage, setHeaderPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("header" as any);
      setHeaderPage(response);
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid container spacing={0} style={{paddingTop:'20px'}}>
        <Grid item lg={2}>
          {headerPage.map((post: any) => (
            <div key={post.id} style={{ paddingLeft: "24px",paddingTop:'12px' }}>
              {post?.data.header_logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.header_logo.url || undefined}
                  alt={post.data.header_logo.alt || "Image"}
                  style={{
                    width: "166.31px",
                    height: "46px",
                    cursor: "pointer",
                  }}
                  // onClick={handleNavigation}
                />
              )}
            </div>
          ))}
        </Grid>
        <Grid item lg={8}>
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
        <Grid item lg={2}>
          {headerPage.map((post: any) => (
            <div key={post.id} style={{ paddingTop: "5px" }}>
              <Button
                style={{
                  background: "#0083C3",
                  color: "#FFFFFF",
                  textTransform: "none",
                 padding:'18px 38px 18px 38px',
                 borderRadius:'12px'
                }}
                onClick={() => {
                  window.location.href = "https://aippoint.ai/aippoint-userinterface/";
                }}
        
              >
                {post.data.button_text}
              </Button>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
