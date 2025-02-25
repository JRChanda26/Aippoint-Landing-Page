"use client";

import { Box, Button, Checkbox, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Subscription() {
  const [subscriptionPage, setSubscriptionPage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("subscription" as any);
      setSubscriptionPage(response);
    };
    fetchData();
  }, []);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index:any) => {
    setClickedIndex(index); 
  };
  const isSmallScreen = useMediaQuery("(max-width:440px)");

  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1440px)");
  const isMd = useMediaQuery("(max-width:1280px)");
  const isSm = useMediaQuery("(max-width:834px)");
  const isXs = useMediaQuery("(max-width:440px)");

  const getDimensions = () => {
    if (isXs) return { width: "400px", height: "555px" };//mobile
    if (isSm) return { width: "251px", height: "440px" };//tab
    if (isMd) return { width: "454px", height: "695px" };//laptop
    if (isLg) return { width: "404px", height: "645px" };//desktop
    if (isXl) return { width: "430px", height: "685px" };
    return { width: "283.55px", height: "433px" };
  };

  const dimensions = getDimensions();
  return (
    <>
      <div>
        {subscriptionPage.map((post: any) => (
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
                {post.data.pricing}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div>
        {subscriptionPage.map((post: any) => (
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
                  fontSize: { xs: "24px", sm: "32px",md:"32px", lg: "36px", xl: "45px" },
                  lineHeight: {
                    xs: "36px",
                    sm: "48px",
                    md:"48px",
                    lg: "54px",                         
                    xl: "67.5px",
                  },
                  paddingLeft:isSmallScreen?'20px':'0px',
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
                  fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "16px", xl: "18px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md:"21px",
                    lg: "24px",
                    xl: "27px",
                    paddingLeft:isSmallScreen?'20px':'0px',
                  },
                  color: "#0A0A0A",
                }}
              >
                {post.data.top_content}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div style={{paddingTop:'25px',display: "flex",
              justifyContent: "center",
              alignItems: "center",}}>
        {subscriptionPage.map((post: any) => (
          <div
            key={post.id}
            style={{
              textAlign: "center",
              background: "#FAFAFA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:'100px',
              padding:'6px'
              
            }}
          >
            <div style={{  textAlign: "center",
              background: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap:'11px',
              padding:'14px',
              borderRadius:'100px' }}>
              <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:500,
                // fontSize:'16px',
                // lineHeight:'24px',
                fontSize: { xs: "14px", sm: "16px",md:"16px", lg: "16px", xl: "16px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "24px",
                    md:"24px",
                    lg: "24px",
                    xl: "24px",
                  },
                color:'#0083C3'
              }}>{post.data.billed_monthly}</Typography>
              <Typography  sx={{
                fontFamily:'Poppins',
                fontWeight:300,
                // fontSize:'14px',
                // lineHeight:'21px',
                fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "14px", xl: "14px" },
                  lineHeight: {
                    xs: "21px",
                    sm: "21px",
                    md:"21px",
                    lg: "21px",
                    xl: "21px",
                  },
                color:'#FFFFFF',
                background:'#0083C3',
                borderRadius:'100px',
                padding:'11px 18px'
              }}>{post.data.save_up_to}</Typography>
            </div>
            <div style={{paddingLeft:'82px'}}>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:500,
                // fontSize:'16px',
                // lineHeight:'24px',
                fontSize: { xs: "16px", sm: "16px",md:"16px", lg: "16px", xl: "14px" },
                lineHeight: {
                  xs: "24px",
                  sm: "24px",
                  md:"24px",
                  lg: "24px",
                  xl: "21px",
                },
                color:'#0A0A0A',
                paddingRight:{xs:'11px',lg:'82px'}
              }}>{post.data.billed_yearly}</Typography>
              </div>
          </div>
        ))}
      </div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop:'32px',
          // paddingLeft:'24px',
          // paddingRight: '24px',
          gap:{xl:'52px',lg:'14px',sm:'21px',md:'21px',xs:'25px'}
        }}
      >
        
        <Grid item lg={3.5} sx={{border: '0.5px solid #000000',borderRadius:'24px',
          width:dimensions.width,
          height:dimensions.height}}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id} style={{padding:'14px',display:'flex',flexDirection:'column'}}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "16px",
                    // lineHeight: "24px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "14px", xl: "16px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "21px",
                      xl: "24px",
                    },
                    color:'#0A0A0A'
                  }}
                >
                  {post.data.small_teams}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "20px",
                    // lineHeight: "30px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "18px", xl: "20px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "27px",
                      xl: "30px",
                    },
                    color:'#0A0A0A'
                  }}
                >
                  {post.data.starter}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "48px",
                    // lineHeight: "72px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "48px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "72px",
                    },
                    color:'#0A0A0A'
                  }}
                >
                  {post.data.free}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}
                >
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.limited_ai_resume_parsing}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}
                >
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.basic_candidate_scoring}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}
                >
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.ai_interview}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}
                >
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.standard_job_posting}
                </Typography>
                {/* <Box sx={{ 
                  // paddingTop: "268px",
                  paddingTop:{xs:'131px',sm:'45px',md:'45px',lg:'165px',xl:'268px'},
                  display:'flex',
                      justifyContent:'center',
                      textAlign:'center'}}> */}
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      // padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      // width:'400px',
                      paddingTop:'18px',
                      paddingBottom:'18px',
                      // paddingBottom:{xs:'25px',sm:'22.98px',md:'22.98px',lg:'20px',xl:'14px'},
                      marginTop:{xs:'125px',sm:'45px',md:'210px',lg:'210px',xl:'290px'},
                      
                    }}
                  >
                    {post.data.try_for_free}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                {/* </Box> */}
            </div>
          ))}
        </Grid>
        <Grid item lg={3.5} sx={{border: '0.5px solid #000000',borderRadius:'24px',width:dimensions.width,height:dimensions.height}}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id} style={{padding:'14px'}}>
                <Typography  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "16px",
                    // lineHeight: "24px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "14px", xl: "16px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "21px",
                      xl: "24px",
                    },
                    color:'#0A0A0A'
                  }}>{post.data.growing_businesses}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "20px",
                    // lineHeight: "30px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "14px", xl: "16px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "21px",
                      xl: "24px",
                    },
                    color:'#0083C3'
                  }}>{post.data.pro}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "48px",
                    // lineHeight: "72px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "48px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "72px",
                    },
                     color:'#0083C3'
                  }}>
                  {post.data.growing_businesses_value}
                  
                  <span style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                     color:'#0A0A0A'
                  }}>{post.data.month}</span>
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.unlimited_ai_resume_parsing}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.advanced_candidate_scoring}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.ai_driven_interviews}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.smart_job_description_optimization}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.interview_scheduling_automation}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.basic_analytics_dashboard}
                </Typography>
                {/* <Box sx={{ 
                  // paddingTop: "220px",
                  paddingTop:{xs:'96px',sm:'20px',md:'20px',lg:'130px',xl:'233px'},
                  display:'flex',
                      justifyContent:'center',
                      textAlign:'center' }}> */}
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      // padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      // width:'400px',
                      width:'100%',
                      paddingTop:'18px',
                      paddingBottom:'18px',
                      // paddingBottom:{xs:'25px',sm:'22.98px',md:'22.98px',lg:'20px',xl:'14px'},
                      marginTop:{xs:'96px',sm:'20px',md:'168px',lg:'168px',xl:'209px'},
                    }}
                  >
                    {post.data.try_for_free}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                {/* </Box> */}
            </div>
          ))}
        </Grid>
        <Grid item lg={3.5} sx={{border: '0.5px solid #000000',borderRadius:'24px',width:dimensions.width,height:dimensions.height}}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id} style={{padding:'14px'}}>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    // fontSize: "16px",
                    // lineHeight: "24px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "14px", xl: "16px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "21px",
                      xl: "24px",
                    },
                    color:'#0A0A0A'
                  }}>{post.data.large_enterprises}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "20px",
                    // lineHeight: "30px",
                    fontSize: { xs: "14px", sm: "14px",md:"14px", lg: "18px", xl: "20px" },
                    lineHeight: {
                      xs: "21px",
                      sm: "21px",
                      md:"21px",
                      lg: "27px",
                      xl: "30px",
                    },
                    color:'#0A0A0A'
                  }}>{post.data.enterprise}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    // fontSize: "48px",
                    // lineHeight: "72px",
                    fontSize: { xs: "28px", sm: "32px",md:"32px", lg: "36px", xl: "48px" },
                    lineHeight: {
                      xs: "42px",
                      sm: "48px",
                      md:"48px",
                      lg: "54px",
                      xl: "72px",
                    },
                    color:'#0A0A0A'
                  }} >
                  {post.data.custom}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.everything_in_pro_plan}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.custom_ai_model}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.ats_integration}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.ai_powered_candidate}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.dedicated_account_manager}
                </Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "35px",
                    color:'#0A0A0A'
                  }}>
                  <span>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{ color: "chartreuse" }}
                    />
                  </span>
                  {post.data.advanced_analytics}
                </Typography>
                {/* <Box sx={{
                  //  paddingTop: "173px",
                  paddingTop:{xs:'26px',sm:'45px',md:'45px',lg:'60px',xl:'163px'},
                   display:'flex',
                      justifyContent:'center',
                      textAlign:'center' }}> */}
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      // padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      // width:'400px',
                      width:'100%',
                      paddingTop:'18px',
                      paddingBottom:'18px',
                      // paddingBottom:{xs:'25px',sm:'22.98px',md:'22.98px',lg:'20px',xl:'14px'},
                      marginTop:{xs:'26px',sm:'45px',md:'93px',lg:'93px',xl:'205px'},
                    }}
                  >
                    {post.data.contact_us}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                {/* </Box> */}
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Subscription;
