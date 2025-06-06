"use client";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
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
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [status, setStatus] = useState<number | null>(null);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  type Errors = {
    fullname?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = (): Errors => {
    const newErrors: Errors = {};
    if (!fullname) newErrors.fullname = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email address";
    if (!phone) newErrors.phone = "Phone number is required";
    else if (phone.length !== 10)
      newErrors.phone = "Phone number must be exactly 10 digits";
    if (!message) newErrors.message = "Message is required";
    // if (!captchaVerified) newErrors.captcha = "Captcha is required";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check for errors
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = {
      fullname,
      email,
      phone,
      message,
      // captcha: captchaVerified,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setStatusMessage(result.temp);
      setOpenSnackbar(true);

      const statusCode = response.status;
      setStatus(statusCode);

      setFullname("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error saving contact:", error);
    }
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
    <div>
      <Grid container>
        <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
            marginTop: "120px",
            paddingLeft: { sm: '70px' }
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
          <Typography
            //  sx={title}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              // fontSize: "45px",
              // lineHeight: "67.5px",
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "32px",
                lg: "36px",
                xl: "45px",
              },
              lineHeight: {
                xs: "36px",
                sm: "48px",
                md: "48px",
                lg: "54px",
                xl: "67.5px",
              },
              letterSpacing: "0%",
              color: "#0083C3",
              paddingTop: "25px",
            }}
          >
            {" "}
            {contactPage[0]?.data.title}
          </Typography>
          <Typography
            //  sx={description}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              // fontSize: "18px",
              // lineHeight: "27px",
              letterSpacing: "0%",
              // color: "#0A0A0A",
              color: isDarkMode ? '#fff' : '#0A0A0A',
              paddingTop: "25px",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "18px",
              },
              lineHeight: {
                xs: "21px",
                sm: "21px",
                md: "21px",
                lg: "24px",
                xl: "27px",
              },
            }}
          >
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
            paddingLeft: { sm: '70px' }
          }}
        >
          <Grid
            item
            lg={6}
            sx={{
              // background: "#FAFAFA",
              background: isDarkMode ? '#1C1C1C' : "#FAFAFA",
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
              <Typography
                //  sx={labels}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  // fontSize: "18px",
                  // lineHeight: "27px",
                  fontSize: { xs: "14px", sm: "18px", md: "18px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "27px",
                    md: "27px",
                    lg: "27px",
                    xl: "27px",
                  },
                  letterSpacing: "0%",
                }}
              >
                {" "}
                {contactPage[0]?.data.full_name_label}
              </Typography>
              <TextField
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.fullname}
                helperText={errors.fullname}
                placeholder="Enter your full name"
                sx={{
                  "& fieldset": { border: "none" },
                  // backgroundColor: "#FFFFFF",

                  background: isDarkMode ? '#0A0A0A' : "#FFFFFF",
                  borderRadius: "12px",
                  "& input::placeholder": {
                    color: isDarkMode ? "#FFFFFF59" : '',
                  },
                }}
              />
              <Typography
                // sx={labels}
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "18px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "27px",
                    md: "27px",
                    lg: "27px",
                    xl: "27px",
                  },
                }}
              >
                {contactPage[0]?.data.email_label}
              </Typography>
              <TextField
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.email}
                helperText={errors.email}
                placeholder="Enter your valid and working email address"
                sx={{
                  "& fieldset": { border: "none" },
                  // backgroundColor: "#FFFFFF",
                  background: isDarkMode ? '#0A0A0A' : "#FFFFFF",
                  borderRadius: "12px",
                  "& input::placeholder": {
                    color: isDarkMode ? "#FFFFFF59" : '',
                  },
                }}
              />
              <Typography
                // sx={labels}
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "18px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "27px",
                    md: "27px",
                    lg: "27px",
                    xl: "27px",
                  },
                }}
              >
                {contactPage[0]?.data.phone_label}
              </Typography>
              <TextField
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.phone}
                helperText={errors.phone}
                placeholder="+91 9100876754"
                sx={{
                  "& fieldset": { border: "none" },
                  // backgroundColor: "#FFFFFF",
                  background: isDarkMode ? '#0A0A0A' : "#FFFFFF",
                  borderRadius: "12px",
                  "& input::placeholder": {
                    color: isDarkMode ? "#FFFFFF59" : '',
                  },
                }}
              />
              <Typography
                // sx={labels}
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "18px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "27px",
                    md: "27px",
                    lg: "27px",
                    xl: "27px",
                  },
                }}
              >
                {contactPage[0]?.data.message_label}
              </Typography>
              <TextField
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.message}
                helperText={errors.message}
                placeholder="Type your message or note here..."
                multiline
                minRows={4}
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  // backgroundColor: "#FFFFFF",
                  background: isDarkMode ? '#0A0A0A' : "#FFFFFF",
                  borderRadius: "12px",
                  "& textarea::placeholder": {
                    color: isDarkMode ? "#FFFFFF59" : "",
                  },

                }}
              />
            </Grid>
            <Button
              sx={{
                background: "#0083C3",
                color: "#FFFFFF",
                fontWeight: 500,
                // fontSize: "16px",
                // lineHeight: "24px",
                fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "16px", xl: "16px" },
                lineHeight: {
                  xs: "24px",
                  sm: "24px",
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                },
                letterSpacing: "0%",
                fontFamily: "Poppins",
                textTransform: "none",
                borderRadius: "12px",
                width: "100%",
                padding: "18px 0px",
                marginTop: { xs: "33px", sm: "33px", lg: "33px", xl: "60px" },
              }}
              onClick={handleSubmit}
            >
              Send Message
              <ArrowForwardIcon />
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity={status === 200 ? "success" : "error"}
              >
                {statusMessage}
              </Alert>
            </Snackbar>
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
