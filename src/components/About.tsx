import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side - Image placeholder */}
        <div className="about-image-container">
          <div className="about-images">
            <img 
              src="/verticalimg.png" 
              alt="Vertical event image" 
              className="vertical-image"
            />
            <img 
              src="/Horizontalimg.png" 
              alt="Horizontal event image" 
              className="horizontal-image"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="about-content">
          <h2 className="about-title">
            The Student Professional
            <br />
            Awareness Regional Conclave
          </h2>
          
          <p className="about-description">
            SPARC ,hosted by IEEE MACE SB, is a dynamic event focused on bridging academic and corporate needs. It emphasises developing soft skills and professional proficiencies through sessions by industry experts and competitions refining non-technical abilities. SPARC addresses the crucial gap in communication and collaboration skills among students, aiming to equip them with the tools to succeed in the job market and make informed career decisions.
          </p>

          {/* Statistics */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">02</div>
              <div className="stat-label">Days Event</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Sessions & Workshop</div>
            </div>
          </div>

          {/* Register Button */}
          <button className="about-register-btn">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;