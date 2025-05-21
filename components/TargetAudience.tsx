export default function TargetAudience() {
  return (
    <>
      {/* Heading & Description – Unchanged on large screens */}
      <div className="header">
        <h1 className="heading">TARGET AUDIENCE</h1>
        <p className="description">
          In order to seamlessly achieve the business and design goals, 
          the illustration below represents the process I went through:
        </p>
      </div>

      {/* Oluwatobi Hassan Section */}
      <section className="wrapper">
        <div className="container">
          {/* Left – Image */}
          <div className="imageContainer">
            <img
              src="/assets/Rectangle 17.png"
              alt="Oluwatobi Hassan"
              className="image"
            />
          </div>
          {/* Right – Content */}
          <div className="content">
            <div className="textContent">
              <h2 className="name">Oluwatobi Hassan, 28</h2>
              <p className="role">Software Engineer</p>
              <hr className="divider" />
              <p className="bio">
                Oluwatobi is a Software Engineer in Canada. She loves her family so much, 
                and the well-being of her family is her priority. Recently, she got the news 
                that her father, back in Nigeria, isn’t feeling too well. Although he has 
                been discharged from the hospital, he still needs to be monitored.
              </p>
            </div>
            <div className="cardContainer">
              {/* Goals */}
              <div className="card">
                <h3 className="cardTitle">Goals</h3>
                <p className="cardText">
                  To get a healthcare professional to take care of her father. 
                  To monitor her father’s health from Canada.
                </p>
              </div>
              {/* Pain Points */}
              <div className="card">
                <h3 className="cardTitle">Pain Points</h3>
                <p className="cardText">
                  Lack of skilled &amp; well-trained care professionals to handle her father’s 
                  condition. Not being able to monitor care professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandra Philips Section */}
      <section className="wrapper">
        <div className="container">
          {/* Left – Image */}
          <div className="imageContainer">
            <img
              src="/assets/Rectangle 25.png"
              alt="Sandra Philips"
              className="image"
            />
          </div>
          {/* Right – Content */}
          <div className="content">
            <div className="textContent">
              <h2 className="name">Sandra Philips, 32</h2>
              <p className="role">Care Professional</p>
              <hr className="divider" />
              <p className="bio">
                Sandra is a MyCare Assistant certified care professional. She loves rendering care 
                services to her patients as she has been taught by the instructors at MyCare Assistant. 
                Most of the time, she misses available care shifts when they are posted on the WhatsApp 
                group. She really wants to get notified about available care shifts on time.
              </p>
            </div>
            <div className="cardContainer">
              {/* Goals */}
              <div className="card">
                <h3 className="cardTitle">Goals</h3>
                <p className="cardText">
                  To render care services to her patients efficiently. 
                  To properly manage her care shifts so they are not conflicting.
                </p>
              </div>
              {/* Pain Points */}
              <div className="card">
                <h3 className="cardTitle">Pain Points</h3>
                <p className="cardText">
                  Misses out on care shifts due to not being available. 
                  Not being able to provide certain care services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  /* Global reset */
  * {
    box-sizing: border-box;
  }

  .header {
    max-width: 1272px;
    margin: 0 auto;
    padding: 80px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    font-family: Poppins;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: #aaaaaa;
    margin-top: 16px;
    max-width: 568px;
    text-align: left;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 16px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1b1b1b;
    border-radius: 40px;
    width: 1272px;
    height: 602px;
    margin: 0 auto 80px;
    padding: 40px;
    gap: 40px;
  }

  .imageContainer {
    width: 420px;
    height: 100%;
    overflow: hidden;
    border-radius: 40px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
  }

  .textContent {
    display: block;
  }

  .name {
    font-family: Poppins;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
    color: #ffffff;
  }

  .role {
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    color: #a2a2a2;
    margin-bottom: 16px;
  }

  .divider {
    width: 100%;
    border: 1px solid #282828;
    margin-bottom: 16px;
  }

  .bio {
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    max-width: 724px;
    margin-bottom: 32px;
    color: #a2a2a2;
  }

  .cardContainer {
    display: flex;
    gap: 24px;
  }

  .card {
    background: #272727;
    border-radius: 24px;
    padding: 24px;
    width: 350px;
  }

  .cardTitle {
    font-family: Poppins;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #ffffff;
  }

  .cardText {
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #a2a2a2;
  }

  /* Responsive styles */
   .wrapper .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1b1b1b;
    border-radius: 40px;
    width: 1272px;
    height: 602px;
    margin: 0 auto 80px;
    padding: 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    /* Target ALL containers */
    .wrapper .container {
      flex-direction: column;
      width: 100%;
      height: auto;
      padding: 24px;
      gap: 24px;
      margin-bottom: 40px;
    }

    .wrapper .imageContainer {
      width: 100%;
      height: 300px;
    }

    .wrapper .content {
      width: 100%;
    }

    .wrapper .cardContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
     .header {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 16px; /* Adds space between heading and description */
  }

  .heading {
    font-size: 48px; /* Scale down for smaller screens */
    line-height: 56px;
  }

  .description {
    font-size: 18px; /* Adjust for readability */
    line-height: 28px;
    max-width: 90%;
  }

    .wrapper .container {
       flex-direction: column;
    align-items: center;
    text-align: center;
    }

    .wrapper .imageContainer {
        width: 100%;
        height: auto;
    }

    .wrapper .content {
      width: 100%;
    }

    .wrapper .cardContainer {
     width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
    }
  }

  @media (max-width: 480px) {
    .heading {
    font-size: 36px;
    line-height: 44px;
  }
    .header {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 16px; /* Adds space between heading and description */
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

    .wrapper .container {
      padding: 20px;
    }
    
    .wrapper .cardContainer {
      grid-template-columns: 1fr;
    }
  }
`}</style>
    </>
  );
}
