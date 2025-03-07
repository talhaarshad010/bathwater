/** @format */

import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useLocation } from "react-router-dom";
import {
  useCheckUserMutation,
  useUpdatePointsMutation,
  useUserRegisterationMutation,
} from "../redux/apis/UserAuth";
import landingPageImg from "../images/BGImage.png";
import CountDown from "../components/CountDown";

const LandingPage = ({ uniqueId, email: defaultEmail = "" }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(defaultEmail);
  const location = useLocation();
  const [userRegister] = useUserRegisterationMutation();
  const [checkUserr] = useCheckUserMutation();
  const [updatePoints] = useUpdatePointsMutation();

  const targetDate = "2025-02-01T00:00:00";
  const { days, hours, minutes, seconds } = CountDown(targetDate);

  useEffect(() => {
    const pathname = location.pathname;
    const URL = uniqueId || pathname.split("/").filter(Boolean).pop();
    console.log("Extracted URL:", URL);

    handleUserAndUpdatePoints(URL);
  }, [location?.pathname, uniqueId]);

  const handleUserAndUpdatePoints = async (uniqueId) => {
    console.log("Checking user for uniqueId:", uniqueId);

    try {
      const { data: checkUserData, error: checkUserError } = await checkUserr(
        uniqueId
      );
      if (checkUserError) {
        console.error("Error checking user:", checkUserError);
        return;
      }
      console.log("User check response:", checkUserData);

      if (checkUserData?.exists) {
        console.log("User found, updating points...");
        const { data: pointsData, error: pointsError } = await updatePoints({
          uniqueId,
        });
        if (pointsError) {
          console.error("Error updating points:", pointsError);
          return;
        }
        console.log("Points updated successfully:", pointsData);
      } else {
        console.log("User not found. Cannot update points.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handleJoinWaitlist = async () => {
    console.log("Email:", email);
    let payload = {
      email: email,
    };
    const saveUser = await userRegister(payload);

    console.log("saveUser", saveUser);
    navigate("/ReferalPage", {
      state: {
        email: saveUser.data.data.email,
        uniqueId: saveUser.data.data.UID,
        userPoints: saveUser.data.data.userPoints,
      },
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: { xs: "20px", sm: "40px" },
        paddingBottom: { xs: "20px", sm: "40px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${landingPageImg})`,
          backgroundColor: "#6D8BB1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: "2500px",
            padding: { xs: 4, sm: 6, md: 8 },
            borderRadius: "20px",
            backdropFilter: "blur(8px)",
            // backgroundColor: "#6D8BB1",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
            color: "white",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <img
              src={logo}
              alt={logo}
              style={{ width: "60%", height: "auto", maxWidth: "300px" }}
            />
          </Box>

          <Typography
            variant="h1"
            component="h1"
            // fontFamily={'normal'}
            color={"#f0f0f0"}
            fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
            sx={{ fontWeight: "thin", my: { xs: 1, sm: 1, md: 2, lg: 2 } }}
          >
            in {days} DAYS
          </Typography>
          {/* <Typography
            variant='h3'
            component='h1'
            fontFamily={'Etrusco'}
            color={'#BFD730'}
            fontSize={{ xs: '1.5rem', sm: '2rem', md: '3rem' }}
            sx={{ fontWeight: 'normal' }}>
            Days To Go
          </Typography> */}

          <Typography
            variant="h1"
            component="h1"
            fontFamily={"Etrusco"}
            color={"#f0f0f0"}
            fontSize={{ xs: "1.8rem", sm: "3rem", md: "4rem" }}
            sx={{
              fontWeight: "bold",
              transform: "scaleY(1.3)",
              transformOrigin: "center",
              letterSpacing: 4,
            }}
          >
            MAGNESIUM INFUSED
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            fontFamily={"Etrusco"}
            color={"#f0f0f0"}
            fontSize={{ xs: "1.5rem", sm: "3.2rem", md: "4.2rem" }}
            sx={{
              fontWeight: "bold",
              transform: "scaleY(1.3)",
              letterSpacing: 4,
              my: { xs: 2, sm: 2, md: 3, lg: 3 },
              transformOrigin: "center",
            }}
          >
            MOUNTAIN WATER
          </Typography>
          {/* <Typography
            variant='h1'
            component='h1'
            fontFamily={'Etrusco'}
            margin={0}
            lineHeight={1}
            color={'#00AEEF'}
            fontSize={{ xs: '1.8rem', sm: '4rem', md: '5rem' }}
            sx={{
              fontWeight: 'bold',
              transform: 'scaleY(1.3)',
              transformOrigin: 'center',
            }}>
            HYDRATION
          </Typography> */}

          <Typography
            variant="h1"
            component="h1"
            // fontFamily={'Etrusco'}
            letterSpacing={1}
            color={"#f0f0f0"}
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
            sx={{
              fontWeight: "normal",
              transform: "scaleY(1)",
              transformOrigin: "center",
              my: { xs: 2, sm: 2, md: 3, lg: 3 },
            }}
          >
            ...AKA THE MOST FUN DRINK ON EARTH
          </Typography>

          <Typography
            variant="h5"
            component="h1"
            fontFamily={"Etrusco"}
            letterSpacing={1}
            color={"#f0f0f0"}
            fontSize={{ xs: "1.7rem", sm: "2rem", md: "2.5rem" }}
            mb={0}
            sx={{
              mt: { xs: 4, sm: 4, md: 3, lg: 3 },
              letterSpacing: 2,
            }}
          >
            Launching 02/01 at 9AM PST
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: 2,
              px: 1,
              py: { xs: 1 },
              mt: 0,
            }}
          >
            <TextField
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter your email"
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                // height: '2.5rem',
                color: "black",
                // px: 1,
                my: 1,
                width: { xs: "100%", sm: "100%", md: "60%" },
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
                  color: "black",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                  textAlign: "center",
                },
              }}
              inputProps={{
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                title: "Please enter a valid email address",
              }}
              error={
                email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
              } // Show error if email is invalid
              helperText={
                email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
                  ? "Invalid email address"
                  : ""
              }
            />

            <Button
              onClick={handleJoinWaitlist}
              disabled={
                !email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
              }
              sx={{
                fontFamily: "Etrusco",
                fontWeight: "bold",
                backgroundColor: "#BFD730",
                color: "#000",
                borderRadius: "10px",
                ml: { xs: 0, sm: 1, md: 2 },
                px: { xs: 4, sm: 5, md: 7 },
                py: { xs: 1, sm: 1, md: 2 },
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem" },
                minWidth: { xs: "auto", sm: "200px", md: "280px" },
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#A0C200",
                },
              }}
            >
              Join the waitlist
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
