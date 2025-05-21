import React from "react";
import NextProjectButton from "./ArrowButton";

const NextProject: React.FC = () => {
  return (
    <div className="next-project">
      {/* Left Content Section */}
      <div className="content">
        <span className="title">NEXT PROJECT</span>
        <h2 className="project-name">Restaurant Website Redesign</h2>
        <NextProjectButton nextPath="/your-next-project-path" />
      </div>

      {/* Right Image Section */}
      <div className="image-container">
        <img src="/assets/Scene 12 1.png" alt="Project Preview" />
      </div>

      {/* Styling */}
      <style jsx>{`
        .next-project {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 48px;
          width: 100%;
          max-width: 1049px;
          margin: 0 auto;
          position: relative;
          padding: 80px 20px;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 48px;
          width: 415px;
          height: auto;
        }

        .title {
          font-family: "Bruno Ace", sans-serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: -0.05em;
          color: #a4a4a4;
        }

        .project-name {
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          color: #ffffff;
        }

        .image-container {
          width: 586px;
          height: 253px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .next-project {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 40px;
          }

          .content {
            align-items: center;
            width: 100%;
            gap: 32px;
          }

          .title,
          .project-name {
            text-align: center;
          }

          .image-container {
            width: 100%;
            max-width: 586px;
            height: auto;
          }

          .image-container img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }

        @media (max-width: 768px) {
          .next-project {
            gap: 32px;
          }

          .content {
            gap: 24px;
          }

          .project-name {
            font-size: 32px;
            line-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .next-project {
            gap: 24px;
            padding: 40px 16px;
          }

          .project-name {
            font-size: 28px;
            line-height: 36px;
          }

          .image-container {
            width: 100%;
            max-width: 300px;
            height: auto;
          }

          .image-container img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }
      `}</style>
    </div>
  );
};

export default NextProject;
