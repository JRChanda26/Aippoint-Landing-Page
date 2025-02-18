"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Button, Grid, Typography } from "@mui/material";

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
            gap:{xs:'20px'}
          }}
        >
          <Grid item lg={2}>
            {footerPage[0]?.data.footer_logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={footerPage[0]?.data.footer_logo.url || undefined}
                alt={footerPage[0]?.data.footer_logo.alt || "Image"}
                style={{
                  width: "166px",
                  height: "46px",
                }}
              />
            )}
          </Grid>
          <Grid item lg={1} sx={{ textAlign: {xs:"center",sm:"left",lg:"left",xl:"left"} }}>
            <Typography style={heading}>
              {footerPage[0]?.data.quick_links}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.home}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.features}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.pricing}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.faq}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.contact_us}
            </Typography>
          </Grid>
          <Grid item lg={2} sx={{ textAlign: {xs:"center",sm:"left",lg:"left",xl:"left"} }}>
            <Typography style={heading}>
              {footerPage[0]?.data.reach_out_to_us}
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column", lg: "row", xl: "row" },
                  gap: "10px",
                  justifyContent:{xs:'center',sm:'center',lg:'left',xl:'left'}
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
                <Typography style={subHeading}>
                  {footerPage[0]?.data.email}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column", lg: "row", xl: "row" },
                  gap: "10px",
                  justifyContent:{xs:'center',sm:'center',lg:'left',xl:'left'}
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
                <Typography style={subHeading}>
                  {footerPage[0]?.data.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1} sx={{ textAlign: {xs:"center",sm:"left",lg:"left",xl:"left"} }}>
            <Typography style={heading}>
              {footerPage[0]?.data.follow_us}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.linkedin_text}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.facebook_text}
            </Typography>
          </Grid>
          <Grid item lg={1.5} sx={{ textAlign: {xs:"center",sm:"left",lg:"left",xl:"left"} }}>
            <Typography style={heading}>{footerPage[0]?.data.legal}</Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.privacy_policy}
            </Typography>
            <Typography style={subHeading}>
              {footerPage[0]?.data.terms_and_conditions}
            </Typography>
          </Grid>
          <Grid item lg={2} sx={{ textAlign: "center" }}>
            <Button
              style={{
                background: "#FFFFFF",
                color: "#0083C3",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "Poppins",
                textTransform: "none",
              }}
            >
              {footerPage[0]?.data.button_text}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
