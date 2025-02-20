"use client";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
function Ourvalueproposition() {
  const [ourvaluePage, seturvaluePage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType(
        "ourvalueproposition" as any
      );
      seturvaluePage(response);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {ourvaluePage.map((post: any) => (
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
                {post.data.values}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div>
        {ourvaluePage.map((post: any) => (
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
      <Grid
        container
        spacing={0}
        sx={{ gap: "28px", paddingTop: "25px",display:'flex',justifyContent:'center' }}
      >
        <Grid item lg={7} sx={{ borderRadius: "24px", background: "#FAFAFA" }}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: "0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "160px",
                  }}
                >
                  {post.data.hiring_process}
                </Typography>
              </div>
              <div style={{ paddingTop: "50px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "45px",
                    lineHeight: "67.5px",
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.faster_hiring_heading}
                </Typography>
              </div>
              <div style={{ paddingTop: "50px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#0A0A0A",
                    paddingRight: "233px",
                  }}
                >
                  {post.data.faster_hiring_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "54px",
                  paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
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
                  {post.data.faster_hiring_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={4} sx={{ borderRadius: "24px", background: "#FAFAFA" }}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: "0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "220px",
                  }}
                >
                  {post.data.candidate_matching}
                </Typography>
              </div>
              <div style={{ paddingTop: "41px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "45px",
                    lineHeight: "67.5px",
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.smart_matching_heading}
                </Typography>
              </div>
              <div style={{ paddingTop: "41px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#0A0A0A",
                    paddingRight: "37px",
                  }}
                >
                  {post.data.smart_matching_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "55px",
                  paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
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
                  {post.data.smart_matching_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        sx={{ gap: "28px", paddingTop: "25px", display:'flex',justifyContent:'center'}}
      >
        <Grid item lg={4} sx={{ borderRadius: "24px", background: "#FAFAFA" }}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: "0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "140px",
                  }}
                >
                  {post.data.hiring_cost}
                </Typography>
              </div>
              <div style={{ paddingTop: "41px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "45px",
                    lineHeight: "67.5px",
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.cost_efficient_heading}
                </Typography>
              </div>
              <div style={{ paddingTop: "41px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#0A0A0A",
                    paddingRight: "37px",
                  }}
                >
                  {post.data.cost_efficient_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "59px",
                  paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
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
                  {post.data.cost_efficient_score}
                </Typography>
                {/* {post?.data.downward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.downward_image.url || undefined}
                    alt={post.data.downward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={7} sx={{ borderRadius: "24px", background: "#FAFAFA" }}>
          {ourvaluePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "38px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#0083C3",
                    border: "0.5px solid #0A0A0A",
                    borderRadius: "100px",
                    padding: "20px 20px",
                    width: "130px",
                  }}
                >
                  {post.data.assistance}
                </Typography>
              </div>
              <div style={{ paddingTop: "50px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "45px",
                    lineHeight: "67.5px",
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.ai_assistance_heading}
                </Typography>
              </div>
              <div style={{ paddingTop: "50px", paddingLeft: "29px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#0A0A0A",
                    paddingRight: "233px",
                  }}
                >
                  {post.data.ai_assistance_content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "57px",
                  paddingTop: "50px",
                  paddingLeft: "29px",
                  paddingBottom: "38px",
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
                  {post.data.ai_assistance_score}
                </Typography>
                {/* {post?.data.upward_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.upward_image.url || undefined}
                    alt={post.data.upward_image.alt || "Image"}
                    style={{
                      width: "132px",
                      height: "43.58px",
                    }}
                    // onClick={handleNavigation}
                  />
                )} */}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Ourvalueproposition;
