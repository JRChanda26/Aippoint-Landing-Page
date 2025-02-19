"use client";
import { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Button, Grid, Typography } from "@mui/material";

function Hire() {
  const [hirePage, setHirePage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("hirethebest" as any);
      setHirePage(response);
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item lg={6}>
          {hirePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingLeft: "20px", paddingTop: "283px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "45px",
                    lineHeight: "67.5px",
                    color: "#0083C3",
                  }}
                >
                  {post.data.heading}
                </Typography>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#0A0A0A",
                  }}
                >
                  {post.data.content}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  paddingLeft: "20px",
                  paddingTop: "25px",
                }}
              >
                <div style={{}}>
                  <Button
                    style={{
                      textTransform: "none",
                      background: "#0083C3",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      padding: "18px 58px 18px 59px",
                    }}
                  >
                    {post.data.getstarted_button}
                  </Button>
                </div>
                <div style={{}}>
                  <Button
                    style={{
                      textTransform: "none",
                      borderRadius: "12px",
                      color: "#0A0A0A",
                      border: "1px solid #0A0A0A",
                      padding: "18px 38px 18px 38px",
                    }}
                  >
                    {post.data.requestdemo_button}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Grid>
        <Grid item lg={6}>
          {hirePage.map((post: any) => (
            <div key={post.id}>
              <div style={{ paddingTop: "40px" }}>
                {post?.data.hire_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.hire_image.url || undefined}
                    alt={post.data.hire_image.alt || "Image"}
                    style={
                      {
                        //   width: "166.31px",
                        //   height: "46px",
                        //   cursor: "pointer",
                      }
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Hire;
