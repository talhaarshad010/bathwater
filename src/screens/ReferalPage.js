import React, { useRef, useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import homebg from "../images/BGImageMob.png";
import { useLocation } from "react-router-dom";
import ToastMessagee from "../components/ToastMessage";
import CountDown from "../components/CountDown";
import Navbar from "../components/Navbar";
import IosShareIcon from "@mui/icons-material/IosShare";
import instaIcon from "../images/insta.png";
import tiktokIcon from "../images/tiktok.png";
const ReferalPage = () => {
  const location = useLocation();
  const { email, uniqueId, userPoints } = location.state || {};
  console.log("state", email, uniqueId, userPoints);
  const inputRef = useRef(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const targetDate = "2025-02-01T00:00:00";
  const { days, hours, minutes, seconds } = CountDown(targetDate);
  const thresholds = [1, 5, 10, 20, 40, 60];
  const nextThreshold = thresholds.find((threshold) => userPoints < threshold);
  const pointsNeeded = nextThreshold ? nextThreshold - userPoints : 0;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://drinkbathwater.com/${uniqueId}`);

    setToastMessage("Link copied to clipboard!");
    setToastType("success");
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${homebg})`,
        backgroundSize: {
          xs: "contain",
          sm: "contain",
          md: "cover",
          lg: "cover",
        },
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {toastVisible && (
        <ToastMessagee
          message={toastMessage}
          type={toastType}
          onClose={() => setToastVisible(false)}
        />
      )}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",

          alignItems: "center",
          height: "100vh",
          paddingTop: { xs: "20px", sm: "40px", md: "60px" },
          paddingBottom: { xs: "20px", sm: "40px", md: "60px" },
        }}
      >
        <Navbar emailAddress={"Email"} rank={"Rank: #3104"} />
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={0} md={1} />
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              py: { xs: 0, sm: 2, md: 5 },
              mt: { xs: 2, sm: 2, md: 5 },
              px: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Typography
              variant="h5"
              color="#fff"
              fontFamily="Etrusco"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
                mr: { xs: 0, sm: 0, md: 1 },
                ml: { xs: 2, sm: 2, md: 0 },
                textAlign: { xs: "left", sm: "center", md: "center" },
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              Launching
            </Typography>
            <Typography
              variant="h5"
              color="#fff"
              fontFamily="Etrusco"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
                mr: { xs: 0, sm: 0, md: 1 },
                ml: { xs: 2, sm: 2, md: 0 },
                textAlign: { xs: "left", sm: "center", md: "center" },
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              FEB 1 AT
            </Typography>
            <Typography
              variant="h5"
              color="#fff"
              fontFamily="Etrusco"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
                mr: { xs: 0, sm: 0, md: 1 },
                ml: { xs: 2, sm: 2, md: 0 },
                textAlign: { xs: "left", sm: "center", md: "center" },
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              9AM PST
            </Typography>
          </Grid>

          <Grid item xs={0} md={1} />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={0} md={1} />
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontFamily: "Etrusco",
                fontWeight: 400,
                transformOrigin: "center",
                textAlign: { xs: "left", sm: "center", md: "center" },
                letterSpacing: 2,
                ml: { xs: 2, sm: 0, md: 0 },
                fontSize: {
                  xs: "1.5rem",
                  sm: "1rem",
                  md: "2.5rem",
                },
                lineHeight: 1,
              }}
            >
              WELCOME TO THE FOUNDERS CLUB
            </Typography>
          </Grid>

          <Grid item xs={0} md={1} />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            my: { xs: 0, sm: 0.7, md: 1 },
          }}
        >
          <Grid item xs={0} md={1} />
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              height: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 0, sm: 5, md: 7 },
              my: { xs: 0, sm: 1, md: 2, lg: 2 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: "600",
                transform: "scaleY(2)",
                transformOrigin: "center",
                fontSize: { xs: "2.5rem", sm: "2rem", md: "3rem" },
                textAlign: { xs: "left", sm: "center", md: "center" },
                width: "100%",
                letterSpacing: 1,
                fontFamily: "Etrusco",
              }}
            >
              SPREAD THE WORLD
            </Typography>
          </Grid>

          <Grid item xs={0} md={1} />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid item xs={0} md={1} />
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              height: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 0, sm: 3, md: 5 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                width: { xs: "100%", sm: "80%", md: "75%" },
                fontFamily: "Etrusco",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                lineHeight: 1,
                letterSpacing: 1,
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              We created bath water because you deserve a water brand that is a
              good as you are told get first access and earn rewards by sharing
              this link with your friends.
            </Typography>
          </Grid>

          <Grid item xs={0} md={1} />
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            my: 1,
          }}
        >
          <Grid item xs={0} md={1} />

          <Grid item xs={0} md={1} />
        </Grid>
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid item xs={0} md={1} />
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 2, sm: 3, md: 5 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                borderRadius: 2,
                px: 1,
                py: { xs: 1 },
              }}
            >
              <Box
                onClick={copyToClipboard}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#1C96C5",
                  width: "100%",
                  borderRadius: 3,
                }}
              >
                <TextField
                  placeholder="Enter your email"
                  value={`https://drinkbathwater.com/${uniqueId}`}
                  inputRef={inputRef}
                  sx={{
                    backgroundColor: "#1C96C5",
                    borderRadius: "10px",
                    mb: 0,
                    mr: { xs: 0, sm: 1, md: 1 },
                    width: { xs: "60%", sm: "90%", md: "100%" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white",
                    },
                  }}
                />
                <IosShareIcon />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={0} md={1} />
        </Grid>

        <Box width={"100%"}>
          <Box
            sx={{
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              fontFamily="Etrusco"
              color="darkblue"
              fontWeight="normal"
              alignItems="center"
              textAlign={{ xs: "left", sm: "center", md: "center" }}
              letterSpacing={3}
              sx={{
                mt: 2,
                mb: 2,
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                pl: { xs: 6, sm: 6, md: 0 },
                textAlign: { xs: "left", sm: "center", md: "center" },
                width: { xs: "100%", sm: "100%" },
              }}
            >
              You have {days} days left
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Etrusco",
                fontWeight: "bold",
                textAlign: { xs: "left", sm: "center", md: "center" },
                letterSpacing: 1,
                fontSize: { xs: "3rem", sm: "3rem", md: "4rem", lg: "5rem" },
                width: "100%",
                pl: { xs: 6, sm: 6, md: 0 },
              }}
            >
              {userPoints} Friends joined
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: 1, sm: 2, md: 3, lg: 4 },
              }}
            >
              <Box display="flex">
                {thresholds.map((threshold, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: 60, sm: 60, md: 60, lg: 80 },
                      height: { xs: 20, sm: 20, md: 20, lg: 25 },
                      backgroundColor:
                        userPoints >= threshold ? "#BFD730" : "#e0e0e0",
                      borderRight: index < thresholds.length - 1 ? 1 : 0,
                      borderColor: "#000",
                      borderTopLeftRadius: index === 0 ? 10 : null,
                      borderBottomLeftRadius: index === 0 ? 10 : null,
                      borderBottomRightRadius:
                        index === thresholds.length - 1 ? 10 : null,
                      borderTopRightRadius:
                        index === thresholds.length - 1 ? 10 : null,
                    }}
                  />
                ))}
              </Box>
              <Box
                display="flex"
                gap={{ xs: 5, sm: 5, md: 2.5, lg: 3 }}
                mt={{ xs: 0.5, sm: 1, md: 1.5, lg: 2 }}
                justifyContent="center"
              >
                {thresholds.map((threshold, index) => (
                  <Typography
                    key={index}
                    sx={{
                      width: { xs: 20, sm: 30, md: 40, lg: 50 },
                      textAlign: "center",
                      fontSize: {
                        xs: "0.6rem",
                        sm: "0.8rem",
                        md: "1rem",
                        lg: "1.2rem",
                      },
                    }}
                    variant="caption"
                  >
                    {threshold}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Typography
              variant="h4"
              fontFamily="Etrusco"
              fontWeight="normal"
              textAlign={{ xs: "left", sm: "center", md: "center" }}
              letterSpacing={2}
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              {pointsNeeded} More For Next Reward: Free Sample Of All Flavours
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              xs={10}
              sm={10}
              md={10}
              lg={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  py: { xs: 1, sm: 1, md: 3, lg: 3 },
                  px: { xs: 2, sm: 2, md: 3, lg: 3 },
                  backgroundColor: "#BFD730",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: { xs: 1, sm: 1, md: 1, lg: 1 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C96C5",
                    borderRadius: 3,
                    py: { xs: 1 },
                    px: { xs: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontFamily: "Etrusco",
                      fontWeight: 700,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "1.75rem",
                      },
                    }}
                  >
                    #1 Referrer
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Etrusco",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    },
                  }}
                >
                  2024 Olympics Trip
                </Typography>
              </Box>

              <Box
                sx={{
                  py: { xs: 1, sm: 1, md: 3, lg: 3 },
                  px: { xs: 2, sm: 2, md: 3, lg: 3 },
                  backgroundColor: "#BFD730",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: { xs: 1, sm: 1, md: 1, lg: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#1C96C5",
                      borderRadius: 3,
                      py: { xs: 1 },
                      px: { xs: 2 },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#000",
                        fontFamily: "Etrusco",
                        fontWeight: 700,
                        fontSize: {
                          xs: "1rem",
                          sm: "1.25rem",
                          md: "1.5rem",
                          lg: "1.75rem",
                        },
                      }}
                    >
                      Top Ten Referrer
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontFamily: "Etrusco",
                      mx: { xs: 1, sm: 1, md: 1, lg: 1 },
                      letterSpacing: 1,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "1.75rem",
                      },
                    }}
                  >
                    (20 Friends)
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Etrusco",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    },
                  }}
                >
                  One Year Of Free Bath Water
                </Typography>
              </Box>

              <Box
                sx={{
                  py: { xs: 1, sm: 1, md: 3, lg: 3 },
                  px: { xs: 2, sm: 2, md: 3, lg: 3 },
                  backgroundColor: "#BFD730",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: { xs: 1, sm: 1, md: 1, lg: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 15,
                      width: 15,
                      border: userPoints == 0 && "2px solid #000",
                      backgroundColor: userPoints >= 1 && "#000",
                      borderRadius: 5,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontFamily: "Etrusco",
                      letterSpacing: 1,
                      mx: { xs: 1, sm: 1, md: 2, lg: 2 },
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "1.75rem",
                      },
                    }}
                  >
                    1 Friend
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Etrusco",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    },
                  }}
                >
                  Free Sample Of All Flavours
                </Typography>
              </Box>

              <Box
                sx={{
                  py: { xs: 1, sm: 1, md: 3, lg: 3 },
                  px: { xs: 2, sm: 2, md: 3, lg: 3 },
                  backgroundColor: "#BFD730",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: { xs: 1, sm: 1, md: 1, lg: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 15,
                      width: 15,
                      border: userPoints < 5 && "2px solid #000",
                      backgroundColor: userPoints >= 5 && "#000",
                      borderRadius: 5,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontFamily: "Etrusco",
                      letterSpacing: 1,
                      mx: { xs: 1, sm: 1, md: 2, lg: 2 },
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "1.75rem",
                      },
                    }}
                  >
                    5 Friends
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Etrusco",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    },
                  }}
                >
                  Bath Water Branded Merch
                </Typography>
              </Box>
              <Box
                sx={{
                  py: { xs: 1, sm: 1, md: 3, lg: 3 },
                  px: { xs: 2, sm: 2, md: 3, lg: 3 },
                  backgroundColor: "#BFD730",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: { xs: 1, sm: 1, md: 1, lg: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 15,
                      width: 15,
                      border: userPoints < 10 && "2px solid #000",
                      backgroundColor: userPoints >= 10 && "#000",
                      borderRadius: 10,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontFamily: "Etrusco",
                      letterSpacing: 1,
                      mx: { xs: 1, sm: 1, md: 2, lg: 2 },
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "1.75rem",
                      },
                    }}
                  >
                    10 Friends
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Etrusco",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    },
                  }}
                >
                  One month of free bath water
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Box
              sx={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box>
                <a href="https://www.instagram.com/">
                  <img src={instaIcon} alt="instaIcon" />
                </a>
              </Box>
              <Box>
                <a href="https://www.tiktok.com/en/">
                  <img src={tiktokIcon} alt="tiktokIcon" />
                </a>
              </Box>
            </Box>
          </Box>
          <Grid
            container
            sx={{
              backgroundColor: "lightgray",
              py: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 6,
            }}
          >
            <Typography
              variant="h5"
              color={"#000"}
              fontFamily={"Etrusco"}
              fontWeight={"bold"}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
              }}
            >
              Need Help? Contact us at :
              <Typography
                variant="h5"
                color={"#00AEEF"}
                fontFamily={"Etrusco"}
                fontWeight={"bold"}
                sx={{
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                  },
                }}
              >
                info@bathwater.com
              </Typography>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default ReferalPage;
