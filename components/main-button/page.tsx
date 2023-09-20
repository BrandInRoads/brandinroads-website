import Link from "next/link";
import React from "react";

const HeaderButton = () => {
  return (
    <header
      className="sc-f763183e-1 jFyOim snipcss-wd3ol style-fJg94"
      id="style-fJg94"
    >
      <div className="sc-f763183e-2 kqITAS">
        <div className="sc-f763183e-4 ldiwOd">
          <div className="sc-f763183e-7 jvVymD">
            <Link href="/about">
              <button className="sc-f763183e-6 gbIqjK">About</button>
            </Link>
          </div>
          <div className="sc-f763183e-3 kdNesv">
            <Link href="/">
              <img
                src="../images/logo.svg"
                className="logo-brandinroad"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="sc-f763183e-8 forKok" style={{ zIndex: "9999" }}>
          <Link href="/contact">
            <button className="sc-f763183e-9 efqeoU">Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderButton;
