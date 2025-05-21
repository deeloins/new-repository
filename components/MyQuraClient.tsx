export default function MyQuraClient() {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <h1 className="heading">MYQURA CLIENT</h1>
        <p className="description">
          The MyQura Client app was designed with intentionality to ensure the
          user’s needs are catered for, providing a seamless experience when
          ordering a care service.
        </p>
      </div>

      {/* Top Image Section – arranged in a row */}
      <section className="topImageSection">
        <div className="imageContainer">
          <img
            src="/assets/MyCare Flash 1.png"
            alt="MyCare Flash"
            className="image"
          />
          <img
            src="/assets/MyCare Onbarding 1.png"
            alt="Onboarding 1"
            className="image"
          />
          <img
            src="/assets/MyCare Onbarding 2.png"
            alt="Onboarding 2"
            className="image"
          />
          <img
            src="/assets/MyCare Onbarding 3.png"
            alt="Onboarding 3"
            className="image"
          />
        </div>
      </section>

      {/* Vector 10 Image */}
      <div className="vectorContainer">
        <img src="/assets/Vector 10.png" alt="Vector 10" />
      </div>

      {/* First Description Blocks – arranged in two rows as originally */}
      <section className="gridDescriptionSection">
        <div className="row">
          <div className="descriptionBox">
            <div className="numberCircle">1</div>
            <p className="text">
              I ensured that from the flash screen, it has a feel of human connection
              and care.
            </p>
          </div>
          <div className="descriptionBox">
            <div className="numberCircle">2</div>
            <p className="text">
              Intentionally, I used the pictures of humans to build up the expectation
              of the new users.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="descriptionBox">
            <div className="numberCircle">3</div>
            <p className="text">
              A picture of a caregiver rendering help to a patient pictures what the
              user should expect.
            </p>
          </div>
          <div className="descriptionBox">
            <div className="numberCircle">4</div>
            <p className="text">
              Intentionally, I used the pictures of humans to build up the expectation
              of the new users.
            </p>
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="contentContainer">
        {/* Left Column – MyCare Home Images */}
        <div className="imageWrapper">
          <img
            src="/assets/MyCare Home 1.png"
            alt="MyCare Home 1"
            className="image"
          />
          <img
            src="/assets/MyCare Home 2.png"
            alt="MyCare Home 2"
            className="image"
          />
        </div>
        {/* Right Column – Vector Arrow and Description Boxes */}
        <div className="rightSection">
          <div className="vectorContainer">
            <img src="/assets/Vector 12.png" alt="Vector 12" />
          </div>
          <div className="descBoxes">
            {[
              "A warm welcome from the home screen to help personalize the experience.",
              "The messages can be easily accessible in the case of support cases.",
              "There’s no second guessing of how to get started; the card explains the first thing to do.",
              "The services the users order more frequently are placed before them, making them easily accessible.",
              "After a patient has been added, the card changes based on what’s next for the user."
            ].map((text, index) => (
              <div className="descriptionBox" key={index}>
                <div className="numberCircle">{index + 1}</div>
                <p className="text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* GLOBAL RESET */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }

        /* ========== DESKTOP STYLES ========== */
        .header {
          max-width: 1024px;
          margin: 0 auto;
          padding: 80px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
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
          text-align: left;
        }
        .topImageSection {
          margin-top: 40px;
        }
        .imageContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .image {
          width: 100%
          height: auto;
          object-fit: cover;
          border-radius: 24px;
        }
        .vectorContainer {
          display: flex;
          justify-content: center; 
          align-items: center; 
          margin-top: 40px; 
          position: relative; 
}

        .vectorContainer img {
          width: auto; 
          max-width: 100%; 
          height: auto;
}

        .gridDescriptionSection {
          margin-top: 40px;
        }
        .row {
          display: flex;
          justify-content: center;
          gap: 80px;
        }
        .descriptionBox {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 520px;
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
          font-weight: 600;
          font-size: 22px;
          color: #8c1003;
        }
        .text {
          font-family: Poppins, sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #aaaaaa;
          max-width: 460px;
        }
        .contentContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin-top: 60px;
        }
        .imageWrapper {
          display: flex;
          gap: 16px;
        }
        .rightSection {
          display: flex;
          gap: 40px;
        }
        .descBoxes {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ========== MOBILE STYLES ========== */
@media screen and (max-width: 1023px) {
  .header {
    flex-direction: column;
    text-align: center;
    padding: 40px 16px;
  }
  .heading {
    font-size: 40px;
    text-align: center;
  }
  .description {
    font-size: 16px;
    text-align: center;
    max-width: 100%;
  }
  .imageContainer {
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 16px;
  }
  .image {
    width: calc((100% - 48px) / 4);
    height: auto;
  }
  .gridDescriptionSection,
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    justify-items: center;
  }
  .descriptionBox {
    width: 90%;
  }

  .numberCircle {
    width: 40px; 
    height: 40px;
    line-height: 40px; 
    border-radius: 50%; 
    flex-shrink: 0; 
  }
  .contentContainer {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    gap: 16px; 
    margin-top: 60px;
    overflow-x: auto;
  }
  .imageWrapper {
    display: flex;
    flex-direction: column; 
    gap: 8px; 
    align-items: center; 
  }
  .imageWrapper .image {
    width: 120px; 
    height: auto; 
    border-radius: 12px; 
  }
  .vectorContainer {
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-shrink: 0; 
  }
  .vectorContainer img {
    width: 24px; 
    height: auto; 
  }
  .descBoxes {
    display: flex;
    flex-direction: column;
    gap: 16px; 
  }
  .descriptionBox {
    display: flex;
    align-items: center; 
    gap: 8px;
  }
  .numberCircle {
    width: 24px; 
    height: 24px;
    line-height: 24px;
    font-size: 16px;
  }
  .text {
    font-size: 14px; 
    line-height: 1.4; 
  }
}
@media screen and (max-width: 450px) {
  .gridDescriptionSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
    justify-items: center;
  }
  .row {
    display: contents; 
  }
  .descriptionBox {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    gap: 8px; 
    width: 100%; 
    text-align: center; 
  }
  .numberCircle {
    width: 40px; 
    height: 40px;
    line-height: 40px;
    font-size: 22px;
  }
  .text {
    font-size: 14px; 
  }
   .contentContainer {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    gap: 8px; 
    margin-top: 40px;
    overflow-x: auto; 
  }
  .imageWrapper {
    display: flex;
    gap: 8px; 
  }
  .imageWrapper .image {
    width: 120px; 
    height: auto; 
    border-radius: 12px; 
  }
  .rightSection {
    display: flex;
    align-items: center; 
    gap: 8px; 
  }
  .vectorContainer img {
    width: 24px; 
    height: auto;
  }
  .descBoxes {
    display: flex;
    flex-direction: column;
    gap: 8px; 
  }
  .descriptionBox {
    display: flex;
    align-items: center; 
    gap: 8px;
  }
  .numberCircle {
    width: 24px; 
    height: 24px;
    line-height: 24px;
    font-size: 16px;
  }
  .text {
    font-size: 12px; 
  }
}
      `}</style>
    </>
  );
}