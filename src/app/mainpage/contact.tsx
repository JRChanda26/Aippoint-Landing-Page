"use client";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { client } from "../../../lib/prismic-configuration";

function Contact() {
  const [contactPage, setContactPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setContactPage(response);
    };
    fetchData();
  }, []);

  const labels: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "27px",
    letterSpacing: "0%",
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

  const description: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
    letterSpacing: "0%",
    color: "#0A0A0A",
    paddingTop: "25px",
  };

  return (
    <div>
      <Grid container>
        <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
          }}
        >
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
            {contactPage[0]?.data.heading}
          </Typography>
          <Typography sx={title}> {contactPage[0]?.data.title}</Typography>
          <Typography sx={description}>
            {" "}
            {contactPage[0]?.data.description}
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", lg: "row", xl: "row" },
            justifyContent: "center",
            padding: "20px",
            gap: "10px",
          }}
        >
          <Grid
            item
            lg={6}
            sx={{
              background: "#FAFAFA",
              textAlign: "center",
              borderRadius: "24px",
              padding: "22px",
              height: "100%",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "12px", sm: "12px", lg: "0px", xl: "25px" },
                textAlign: "left",
              }}
            >
              <Typography sx={labels}>
                {" "}
                {contactPage[0]?.data.full_name_label}
              </Typography>
              <TextField
                placeholder="Enter your full name"
                sx={{
                  "& fieldset": { border: "none" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                }}
              />
              <Typography sx={labels}>
                {contactPage[0]?.data.email_label}
              </Typography>
              <TextField
                placeholder="Enter your valid and working email address"
                sx={{
                  "& fieldset": { border: "none" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                }}
              />
              <Typography sx={labels}>
                {contactPage[0]?.data.phone_label}
              </Typography>
              <TextField
                placeholder="+91 9100876754"
                sx={{
                  "& fieldset": { border: "none" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                }}
              />
              <Typography sx={labels}>
                {contactPage[0]?.data.message_label}
              </Typography>
              <TextField
                placeholder="Type your message or note here..."
                multiline
                minRows={4}
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                }}
              />
            </Grid>
            <Button
              sx={{
                background: "#0083C3",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0%",
                fontFamily: "Poppins",
                textTransform: "none",
                borderRadius: "12px",
                width: "100%",
                padding: "18px 0px",
                marginTop: { xs: "33px", sm: "33px", lg: "33px", xl: "60px" },
              }}
            >
              Send Message
              <ArrowForwardIcon />
            </Button>
          </Grid>
          <Grid item lg={6}>
            {contactPage[0]?.data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={contactPage[0]?.data.image.url || undefined}
                alt={contactPage[0]?.data.image.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                  //   objectFit: "cover",
                  //   display: "block",
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
