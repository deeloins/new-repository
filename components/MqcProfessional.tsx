export default function MyQuraCareProfessional() {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <h1 className="heading">MYQURA CARE PROFESSIONAL</h1>
        <p className="description">
          The app is specifically tailored to help Care Professionals get care
          services that suit their certifications and also manage various care
          services & payments.
        </p>
      </div>

      {/* Image Section */}
      <section className="imageContainer">
        <img src="/assets/MyCare Professional 1.png" alt="MyCare Professional 1" className="image" />
        <img src="/assets/MyCare Professional 2.png" alt="MyCare Professional 2" className="image" />
        <img src="/assets/MyCare Professional 3.png" alt="MyCare Professional 3" className="image" />
        <img src="/assets/MyCare Professional 4.png" alt="MyCare Professional 4" className="image" />
      </section>

      {/* Centered Vector */}
      <div className="vectorContainer">
        <img src="/assets/Vector 10.png" alt="Vector 10" className="vector" />
      </div>

      {/* Feature List Section */}
      <section className="featuresContainer">
        {features.map((feature, index) => (
          <div key={index} className="featureRow">
            {/* Left Side */}
            <div className="featureItem">
              <div className="numberCircle">{feature.leftNumber}</div>
              <p className="featureText">{feature.leftText}</p>
            </div>

            {/* Right Side (If Available) */}
            {feature.rightText && (
              <div className="featureItem">
                <div className="numberCircle">{feature.rightNumber}</div>
                <p className="featureText">{feature.rightText}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <style jsx>{`
        /* Header Section */
        .header {
          max-width: 1024px;
          margin: 0 auto;
          padding: 80px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .heading {
          font-family: Figtree, sans-serif;
          font-size: 80px;
          font-weight: 900;
          line-height: 96px;
          color: #ffffff;
          text-align: left;
        }

        .description {
          font-family: Poppins, sans-serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 40px;
          color: #aaaaaa;
          max-width: 568px;
        }

        /* Image Section */
        .imageContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          gap: 10px;
          width: 100%;
        }

        .image {
          flex: 1;
          max-width: calc(25% - 15px);
          height: auto;
          border-radius: 24px;
        }

        /* Centered Vector */
        .vectorContainer {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .vector {
          width: auto;
          height: 60px;
        }

        /* Features Section */
        .featuresContainer {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1272px;
          margin: 0 auto;
          padding-top: 40px;
        }

        .featureRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }

        .featureItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 546px;
        }

        .numberCircle {
          width: 40px;
          height: 40px;
          background-color: #f5dbd8;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Poppins, sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #8c1003;
          margin-bottom: 10px;
        }

        .featureText {
          font-family: Poppins, sans-serif;
          font-size: 20px;
          line-height: 28px;
          color: #aaaaaa;
          letter-spacing: 0.1em;
        }

        /* Responsive Design */
        @media screen and (max-width: 1023px) {
          .featureText {
            font-size: 18px;
            line-height: 26px;
          }
        }

        @media screen and (max-width: 900px) {
          .header {
            flex-direction: column;
            text-align: center;
            align-items: center;
            padding: 60px 16px;
          }

          .heading {
            font-size: 50px;
            line-height: 68px;
          }

          .description {
            font-size: 18px;
            line-height: 30px;
            max-width: 80%;
            text-align: center;
          }

          .featureText {
            font-size: 16px;
            line-height: 24px;
          }
        }

        @media screen and (max-width: 768px) {
          .heading {
            font-size: 42px;
            line-height: 58px;
          }

          .description {
            font-size: 16px;
            line-height: 26px;
          }

          .featureText {
            font-size: 14px;
            line-height: 22px;
          }
        }

        @media screen and (max-width: 600px) {
          .heading {
            font-size: 36px;
            line-height: 52px;
            text-align: center;
          }

          .description {
            font-size: 14px;
            line-height: 24px;
          }

          .featureText {
            font-size: 12px;
            line-height: 20px;
          }

          .numberCircle {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

/* Features List */
const features = [
  {
    leftNumber: 1,
    leftText: "I ensured that from the onboarding screens, has a feel of human connection and care.",
    rightNumber: 2,
    rightText: "It’s compulsory for every care professional to be verified so the company is confident of their care professionals.",
  },
  {
    leftNumber: 3,
    leftText: "The cards make the most important information available to the care professional.",
    rightNumber: 4,
    rightText: "The card shows the time & date for the upcoming care service, so it’s not missed.",
  },
  {
    leftNumber: 5,
    leftText: "The care professional can see their recently completed bookings.",
    rightNumber: 6,
    rightText: "The best match care service is a pool of care services patients have requested for.",
  },
  {
    leftNumber: 7,
    leftText: "Courses are also offered to the care professionals to help them polish their skill set.",
    rightNumber: null,
    rightText: null,
  },
];
