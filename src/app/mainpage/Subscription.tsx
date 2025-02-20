"use client";

import { Button, Checkbox, Grid, Typography } from "@mui/material";
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

  const gridItems = [1, 2, 3];
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
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "45px",
                  lineHeight: "67.5px",
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
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "27px",
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
              <Typography style={{
                fontFamily:'Poppins',
                fontWeight:500,
                fontSize:'16px',
                lineHeight:'24px',
                color:'#0083C3'
              }}>{post.data.billed_monthly}</Typography>
              <Typography  style={{
                fontFamily:'Poppins',
                fontWeight:300,
                fontSize:'14px',
                lineHeight:'21px',
                color:'#FFFFFF',
                background:'#0083C3',
                borderRadius:'100px',
                padding:'11px 18px'
              }}>{post.data.save_up_to}</Typography>
            </div>
            <div style={{paddingLeft:'82px'}}>
            <Typography style={{
                fontFamily:'Poppins',
                fontWeight:500,
                fontSize:'16px',
                lineHeight:'24px',
                color:'#0A0A0A',
                paddingRight:'122px'
              }}>{post.data.billed_yearly}</Typography>
              </div>
          </div>
        ))}
      </div>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop:'32px'
        }}
      >
        
        <Grid item lg={3.5}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id}>
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color:'#0A0A0A'
                  }}
                >
                  {post.data.small_teams}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color:'#0A0A0A'
                  }}
                >
                  {post.data.starter}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "72px",
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
                <div style={{ paddingTop: "268px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.try_for_free}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={3.5}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id}>
              <div>
                <Typography  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color:'#0A0A0A'
                  }}>{post.data.growing_businesses}</Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color:'#0083C3'
                  }}>{post.data.pro}</Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "72px",
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
                <div style={{ paddingTop: "185px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.try_for_free}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={3.5}>
          {subscriptionPage.map((post: any) => (
            <div key={post.id}>
              <div>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color:'#0A0A0A'
                  }}>{post.data.large_enterprises}</Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color:'#0A0A0A'
                  }}>{post.data.enterprise}</Typography>
                <Typography style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "72px",
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
                <div style={{ paddingTop: "185px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      borderRadius: "12px",
                      padding: "18px 141px 18px 141px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {post.data.contact_us}
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Subscription;
