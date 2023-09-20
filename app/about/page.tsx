"use client";
import FooterPage from "@/components/footer/page";
import HeaderButton from "@/components/main-button/page";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  return (
    <>
      <Box
        className=" about-box "
        height={{ base: "270vh", md: "190vh" }}
        position={"relative"}
      >
        <div>
          <Box
            position={"fixed"}
            top={"5%"}
            left={"50%"}
            transform={"translate(-50%, 0%)"}
          >
            {/* Replace the Button with your custom HeaderButton component */}
            <HeaderButton />
          </Box>
        </div>
        <section className=" about-section">
          <Box className=" about-Box">
            <Box className=" about-box1">
              <h1 className=" studio-h1">Agency</h1>
              <p>
                We are a brand design strategy creative agency that helps
                aspirational and luxury brands look, sound, and think
                outstandingly better.
              </p>
              <p>
                Working globally for ten years as a strategic creative agency,
                we deliver uncompromised and breathtaking luxury design
                solutions with the sole mission of crafting prestige.
              </p>
              <p>
                Our visions are fastidiously executed with a keen sense of
                consistency and coherence, unrivalled in today’s print and
                digital luxury world.
              </p>
              <p>
                Brand Inroads’ design agency services include brand strategy,
                brand identity, digital, and bespoke print and packaging design.{" "}
              </p>
              <p>
                Exceptional branding design is nothing without superb execution.
                We work hand in glove with a carefully selected team of artists,
                and niche craftsmen to deliver projects both large and small,
                ensuring the most outstanding results, on time and on budget.{" "}
              </p>
              <p style={{ color: "#F39E20" }}>
                If you are looking for an elite brand strategy agency to help
                grow your own luxury brand then please get in touch.
              </p>
              <Link className=" anchr-but" href="/contact">
                <button className=" active-Button">
                  Book a Discovery Call
                </button>
              </Link>
            </Box>
            <Box className=" right-about">
              <Box className=" box-right1">
                <h2 className=" h2-right1">Brand strategy</h2>
                <p className=" p-right1">
                  Every brand needs a strong brand positioning, personality, and
                  vision, especially the luxury ones.  Brand Inroads crafts
                  powerful and engaging stories for niche international luxury
                  brands worldwide, family businesses, UHNWI, and royalty.
                  <br />
                  <br />A brand is a promise. A great brand is a promise kept.
                  No great company has ever left its branding to fate. To be
                  successful, your brand must be something else. It needs to be
                  recognizable and unique. Differentiation is only reached
                  through great brand positioning; a combination of personality,
                  values, and the brand story behind why your brand exists, all
                  of which need to be decided by the brand itself. It’s all
                  these details that will touch every part of your organization,
                  from what it promises, to how it whispers to the world and
                  interacts with its customers.
                </p>
              </Box>
              <Box className=" box-right1">
                <h2 className=" h2-right1">Brand identity</h2>
                <p className=" p-right1">
                  Brand Inroads offers branding design and visual brand identity
                  to create luxury brands with an edge. Sectors we cover include
                  High-End B2B/C, Luxury Lifestyle, Art & Culture. We also work
                  with ‘Luxury&Beyond’ brands on all aspects of their specific
                  branding and marketing needs.
                  <br />
                  <br />
                  Your brand identity is a tremendous asset and a big part of
                  who you are as a brand. A distinguished logo, strapline,
                  imagery, typography, and language make a brand immediately
                  recognizable, becoming eloquent symbols helping it stand out
                  in the market – and evoking certain emotions in your target
                  audience. We use the power of branding – both visual and
                  verbal – to help top-of-the-line products or luxury services
                  stand out in their sector, making them unique, easier to
                  understand, and more memorable than ever.
                  <br />
                  <br />
                  ‘Driven by passion, not processes’ we adapt our approach, as
                  real craftsmen, to fit each individual branding design project
                  and client. Using the outcome of the brand positioning phase
                  to lead us, we craft bespoke elements to complement and
                  reinforce your brand’s quintessence, designing a magnificent
                  luxury brand identity.
                </p>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      <Box className="margin-footer-about">
        <FooterPage />
      </Box>
    </>
  );
};

export default AboutPage;
