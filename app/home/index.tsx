/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

import HeaderButton from "@/components/main-button/page";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import FooterPage from "@/components/footer/page";
import Link from "next/link";

const HomePage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 270) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box height={{ base: "200vh", md: "190vh" }}>
        <Box
          className=" sld1 style-lE6zH"
          position={"relative"}
          id="style-lE6zH"
        >
          <div className=" fqMxNR">
            <Box dir="rtl" className=" dDZuZf style-oOyzd" id="style-oOyzd">
              <div className=" jdwOOO style-oVU9e" id="style-oVU9e">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Aurate"
                      src="../images/optimizer-04.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-nPAVK"
                      className="style-nPAVK"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-ipjrM" id="style-ipjrM">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Knowell"
                      src="../images/optimizer-03.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-LCeAV"
                      className="style-LCeAV"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-dijQl" id="style-dijQl">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Proper Sleep"
                      src="../images/optimizer-02.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-x1niR"
                      className="style-x1niR"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-6VnFl" id="style-6VnFl">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <div className=" hoAmcV">
                      <img
                        alt="Proper Sleep"
                        src="../images/optimizer-01.jpeg"
                        decoding="async"
                        data-nimg="1"
                        id="style-x1niR"
                        className="style-x1niR"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-hk6Ex" id="style-hk6Ex">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Runi"
                      src="../images/optimizer-07.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-hOBzr"
                      className="style-hOBzr"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-aU6YB" id="style-aU6YB">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Jolie"
                      src="../images/optimizer-06.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-2ZPTb"
                      className="style-2ZPTb"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box
              dir="rtl"
              className="sc-dkrFOg dDZuZf style-UBBd3"
              id="style-UBBd3"
            >
              <div className=" jdwOOO style-QD523" id="style-QD523">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Aurate"
                      src="../images/optimizer-12.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-iLmth"
                      className="style-iLmth"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-6swXl" id="style-6swXl">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Knowell"
                      src="../images/optimizer-08.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-ooGwX"
                      className="style-ooGwX"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-NgWTI" id="style-NgWTI">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Proper Sleep"
                      src="../images/optimizer-09.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-b5iLG"
                      className="style-b5iLG"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-lEp17" id="style-lEp17">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Knowell"
                      src="../images/optimizer-08.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-ooGwX"
                      className="style-ooGwX"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-5kv8d" id="style-5kv8d">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Runi"
                      src="../images/optimizer-07.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-jhFkh"
                      className="style-jhFkh"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-nmbKy" id="style-nmbKy">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Jolie"
                      src="../images/optimizer-06.jpeg"
                      decoding="async"
                      data-nimg="1"
                      id="style-7qy4r"
                      className="style-7qy4r"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box
              dir="rtl"
              className="sc-dkrFOg dDZuZf style-UBBd3"
              id="style-UBBd3"
            >
              <div className=" jdwOOO style-QD523" id="style-QD523">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Aurate"
                      src="../images/09.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-iLmth"
                      className="style-iLmth"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-6swXl" id="style-6swXl">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Knowell"
                      src="../images/08.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-ooGwX"
                      className="style-ooGwX"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-NgWTI" id="style-NgWTI">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Proper Sleep"
                      src="../images/10.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-b5iLG"
                      className="style-b5iLG"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-lEp17" id="style-lEp17">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Knowell"
                      src="../images/010.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-ooGwX"
                      className="style-ooGwX"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-5kv8d" id="style-5kv8d">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Runi"
                      src="../images/12.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-jhFkh"
                      className="style-jhFkh"
                    />
                  </div>
                </div>
              </div>
              <div className=" jdwOOO style-nmbKy" id="style-nmbKy">
                <div className=" fQIWVp">
                  <div className=" jlSyyK">
                    <img
                      alt="Jolie"
                      src="../images/012.jpg"
                      decoding="async"
                      data-nimg="1"
                      id="style-7qy4r"
                      className="style-7qy4r"
                    />
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div>
            <Box
              position={isSticky ? "fixed" : "absolute"}
              top={isSticky ? "5%" : "50%"}
              left={isSticky ? "50%" : "50%"}
              transform={
                isSticky ? "translate(-50%, 0%)" : "translate(-50%, -10%)"
              }
            >
              {/* Replace the Button with your custom HeaderButton component */}
              <HeaderButton />
            </Box>
          </div>
        </Box>
        <div className="sc-835babbe-2 klormV">
          <p>Scroll For More</p>
          <svg
            width="15"
            height="9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8.151 8.228 6.58-6.619a.964.964 0 0 0 0-1.337.943.943 0 0 0-1.325 0L7.5 6.233 1.594.273A.943.943 0 0 0 .27.271a.964.964 0 0 0 0 1.337l6.556 6.619a.942.942 0 0 0 1.325 0z"
              fill="#fff"
            ></path>
          </svg>
        </div>

        <Grid justifyContent={"center"} alignItems={"center"} my={"3em"}>
          <Text
            fontSize={"36px"}
            my={"2em"}
            maxW={"870px"}
            color={"#fff"}
            textAlign={"center"}
            className="font-family"
            lineHeight={"1.05"}
          >
            We craft delight.
          </Text>
          <Text
            fontSize={"16px"}
            mb={"2em"}
            mt={"-3em"}
            px={"1em"}
            maxW={"700px"}
            color={"rgba(255, 255, 255, 0.5)"}
            textAlign={"center"}
            className="font-family"
          >
            We make aspirational brands look, sound, and think outstandingly
            better. Through significant inroads into specific markets, we build
            fascinating brands, top-of-the-line businesses, and tell brand and
            product stories in the most captivating manners.
          </Text>
          <Flex gap={"20px"} justifyContent={"center"} alignItems={"center"}>
            <Button className="outline-Button">Learn More</Button>
            <Link href="/contact">
              <Button className="active-Button">Book a Discovery Call</Button>
            </Link>
          </Flex>
        </Grid>
        <Flex justifyContent={"center"} mt={"10em"}>
          <Box>
            <Text
              fontSize={"26px"}
              my={"2em"}
              color={"#fff"}
              className="font-family"
              textAlign={"center"}
              lineHeight={"1.05"}
            >
              Official Website Launch
            </Text>
            <Flex justifyContent={"center"} textAlign={"center"}>
              <img
                alt="Runi"
                className="launch-img"
                src="../images/NOVEMBER 30th, 2023.png"
                decoding="async"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box position={"relative"} bottom={"-20em"}>
        <FooterPage />
      </Box>
    </>
  );
};

export default HomePage;
