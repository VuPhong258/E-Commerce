import React from "react";
import Container from "./Container";
import { homeBanner } from "../assets";

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden" >
      <div className = "relative ">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full object-cover
            rounded-md"
        />
      </div>
    </Container>
  );
};

export default HomeBanner;
