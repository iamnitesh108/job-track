import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import mainImage from "../assets/images/job-track-image.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Welcome to our job tracking website, where candidates can
            effortlessly log key details like company name, location, position,
            job type, and status. Our user-friendly platform also offers a Stats
            page with bar and area diagrams, providing a quick overview of job
            application trends over time. Simplify your job search and gain
            valuable insights with us!{" "}
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={mainImage} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
