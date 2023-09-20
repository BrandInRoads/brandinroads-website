import { Input } from "@chakra-ui/react";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const FooterPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleEmailChange = (e: any) => {
    setEmail(e);
    console.log(e);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://brandsinroads.onrender.com/send-subscription-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subscription_email: email }),
        }
      );

      if (response.ok) {
        setEmail("");
        setSubscribed(true);
        toast({
          title: "Subscribed.",
          description: "You have been subscribed to our newsletter.",
          status: "success",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      } else {
        console.error("Failed to subscribe:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer
      className="dwEySX "
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <div className="hgrSaY">
        <h2 className=" djabkD">Stay up to date with our boutique agency.</h2>
        <p className="cccaRE">
          Sign up for periodic news from BI. We promise to only share the good
          stuff like new work, musings on the world of branding, and what’s
          happening with Brand Inroads.
        </p>
      </div>
      <form className="ckAkic" onSubmit={handleSubmit}>
        <Input
          required
          w={{ base: "70%", md: "90%" }}
          type="email"
          placeholder="Enter Email Address"
          className="heoWop "
          style={{
            outline: "none",
            border: "none",
          }}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <div className="ewEcwt">
          <button type="submit" className=" kOZhnb" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}{" "}
          </button>
        </div>
        {subscribed && <p className="glAhhy">You’re signed up!</p>}
      </form>
      <div className="bGqKqJ tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
        <span className="cJqNWU">© Brand Inroads 2023</span>
        <div className="hMbHPa">
          <nav className=" kQMtUL">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Behance
            </Link>
          </nav>
        </div>
        <span className="eEkRDn"></span>
        <span className="bMMeUn">
          <button>Site Credits</button>
        </span>
      </div>
    </footer>
  );
};

export default FooterPage;
