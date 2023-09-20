"use client";

import HeaderButton from "@/components/main-button/page";
import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

interface FormData {
  brand_name: string;
  brand_idea: string;
  services: string[]; // Array of selected services
  project_budget: string;
  contact_email: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    brand_name: "",
    brand_idea: "",
    services: [],
    project_budget: "",
    contact_email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const toast = useToast();

  const handleChange = (value: string) => {
    setFormData({ ...formData, project_budget: value });
  };

  const handleServicesRequired = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];

    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        "https://brandsinroads.onrender.com/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Success!", formData);
        setSuccess(true);
        setFormData({
          brand_name: "",
          brand_idea: "",
          services: [],
          project_budget: "",
          contact_email: "",
        });
        toast({
          title: "Contact Information Submitted",
          description:
            "Your contact information has been submitted successfully.",
          status: "success",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      } else {
        setError("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      setError(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="contactForm">
      <Box
        className="about-box"
        mt={{
          base: "0em",
          md: "1em",
        }}
        mb={{
          base: "0em",
          md: "1em",
        }}
        ml={{
          base: "0em",
          md: "1em",
        }}
        mr={{
          base: "0em",
          md: "1em",
        }}
        borderRadius={"10px"}
        background={"#ebebeb"}
        position={"relative"}
      >
        <div>
          <Box
            position={"fixed"}
            top={"5%"}
            left={{ base: "50%", md: "50%" }}
            transform={"translate(-50%, 0%)"}
          >
            <HeaderButton />
          </Box>
        </div>
        <Box>
          <Box
            display={{
              base: "block",
              md: "flex",
            }}
          >
            <Box p={{ base: "1em", md: "5em" }} w={{ base: "100%", md: "50%" }}>
              <Text
                fontSize={{ base: "auto", md: "36px" }}
                color={"#000"}
                fontWeight={"400"}
                lineHeight={"50.4px"}
              >
                Like what you see? We’d love to hear from you.
              </Text>
              <Text
                fontSize={{ base: "auto", md: "15px" }}
                color={"#000"}
                fontWeight={"400"}
                mt={"2em"}
              >
                We’re glad something here has caught your attention. Let’s
                connect to say hello, talk about all the juicy details of your
                brand and explore if we are the right fit for your project.
              </Text>
              <br />
              <br />
              <Text
                color={"#000"}
                fontWeight={"600"}
                fontSize={"13px"}
                mb={"10px"}
              >
                Brand Name*
              </Text>
              <Input
                placeholder=""
                borderColor={"#000"}
                color={"#000"}
                outline={"none"}
                value={formData.brand_name}
                onChange={(e) =>
                  setFormData({ ...formData, brand_name: e.target.value })
                }
              />
              <br />
              <br />
              <Text
                color={"#000"}
                mb={"10px"}
                fontSize={"13px"}
                fontWeight={"600"}
              >
                Brand Idea*
              </Text>
              <Textarea
                placeholder=""
                borderColor={"#000"}
                color={"#000"}
                h={"200px"}
                outline={"none"}
                size="lg"
                value={formData.brand_idea}
                onChange={(e) =>
                  setFormData({ ...formData, brand_idea: e.target.value })
                }
              />
            </Box>
            <Box p={{ base: "1em", md: "5em" }} w={{ base: "100%", md: "50%" }}>
              <Text
                color={"#000"}
                fontWeight={"600"}
                fontSize={"13px"}
                mb={"10px"}
              >
                SERVICES REQUIRED*
              </Text>
              <Flex gap={"1em"} flexWrap={"wrap"}>
                <Button
                  className={
                    formData.services.includes("Branding")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Branding")}
                >
                  Branding
                </Button>
                <Button
                  className={
                    formData.services.includes("Branding Messaging")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Branding Messaging")}
                >
                  Branding Messaging
                </Button>
                <Button
                  className={
                    formData.services.includes("Packaging Design")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Packaging Design")}
                >
                  Packaging Design
                </Button>
                <Button
                  className={
                    formData.services.includes("Illustration")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Illustration")}
                >
                  Illustration
                </Button>
                <Button
                  className={
                    formData.services.includes("Website Design")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Website Design")}
                >
                  Website Design
                </Button>
                <Button
                  className={
                    formData.services.includes("3D Rendering")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("3D Rendering")}
                >
                  3D Rendering
                </Button>
                <Button
                  className={
                    formData.services.includes("Other or Not Listed")
                      ? "active-Button1"
                      : "outline-Button1"
                  }
                  onClick={() => handleServicesRequired("Other or Not Listed")}
                >
                  Other or Not Listed
                </Button>
              </Flex>
              <Box mt={"2em"}>
                <label className="dhVNYA" style={{ color: "#000" }}>
                  Project Budget
                  <span>*</span>
                </label>
                <RadioGroup
                  name="myRadioGroup"
                  value={formData.project_budget}
                  display={"flex"}
                  justifyContent={"space-between"}
                  onChange={(value) => handleChange(value)}
                >
                  <Flex flexWrap={"wrap"}>
                    <Box mr={4}>
                      <Radio value="$25,000" color={"#000"}>
                        $25,000
                      </Radio>
                    </Box>
                    <Box mr={4}>
                      <Radio value="$35,000">$35,000</Radio>
                    </Box>
                    <Box mr={4}>
                      <Radio value="$45,000">$45,000</Radio>
                    </Box>
                    <Box>
                      <Radio value="$55,000 &amp; Above ">
                        $55,000 &amp; Above
                      </Radio>
                    </Box>
                  </Flex>
                </RadioGroup>
              </Box>
              <Flex
                gap={"1em"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={"2em"}
              >
                <Box>
                  <Text
                    color={"#000"}
                    fontWeight={"600"}
                    mb={"10px"}
                    fontSize={"13px"}
                  >
                    Email Address*
                  </Text>
                  <Input
                    placeholder=""
                    borderColor={"#000"}
                    color={"#000"}
                    w={{ base: "100%", md: "300px" }}
                    outline={"none"}
                    value={formData.contact_email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact_email: e.target.value,
                      })
                    }
                  />
                </Box>
                <Button
                  color={"#fff !important"}
                  height={"40px"}
                  fontWeight={"400"}
                  fontSize={"13px"}
                  background={"#000000 !important"}
                  mt={"1.5em"}
                  onClick={handleSubmit}
                  isDisabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Your Request"}
                </Button>
              </Flex>
              {error && (
                <Text color={"red"} fontSize={"13px"} mt={"1em"}>
                  {error}
                </Text>
              )}

              <Text
                color={"#000"}
                fontWeight={"600"}
                fontSize={"13px"}
                mt={"2em"}
                mb={"10px"}
              >
                *Providing these details up front helps us determine if we are
                the right fit. Please provide information on each section. We
                can discuss details on a discovery call.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default ContactPage;
