import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/mani (2).jpg";
import "../NavbarCss/Home.css";
import Marquee from "react-fast-marquee";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="overlay">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-text">
            <h1>All Your Contacts, One Place</h1>
            <p>Manage your contacts easily and professionally.</p>
            <Marquee>
              <h3>Welcome To My Website</h3>
            </Marquee>
            <button onClick={() => navigate("/DisplayContact")}>
              Get Started
            </button>
          </div>

          <div className="hero-image">
            <img src={img} alt="Professional Contacts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
