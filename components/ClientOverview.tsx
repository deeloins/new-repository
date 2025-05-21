export default function ClientOverview() {
  return (
    <section className="container">
      {/* Left Column – Wrapped client info and responsibilities */}
      <div className="client-wrapper">
        <div className="client-info">
          <h2 className="title">Client:</h2>
          <p className="text">MyCare Assistant</p>

          <h2 className="title">My Role:</h2>
          <p className="text">Lead Designer</p>

          <h2 className="title">Timeline:</h2>
          <p className="text">3 months</p>
        </div>

        <div className="responsibilities">
          <h2 className="title">Responsibilities:</h2>
          <ul className="list">
            <li>User Research</li>
            <li>User Flows &amp; Wireframes</li>
            <li>Design Direction</li>
            <li>Storyboarding</li>
            <li>Visual Design</li>
            <li>Prototyping</li>
          </ul>
        </div>
      </div>

      {/* Right Column – Overview */}
      <div className="overview">
        <h2 className="title">Overview:</h2>
        <p className="description">
          <span style={{ fontWeight: "bold", color: "white" }}>
            MyCare Assistant
          </span>{" "}
          is a leading Nigerian home healthcare service provider dedicated to
          delivering comprehensive and compassionate care. Driven by a vision
          of creating a robust and accessible health solution, MyCare Assistant
          offers a diverse range of services tailored to meet the unique needs of
          individuals requiring care in the comfort of their own homes.
        </p>
        <p className="description">
          These services are provided by a team of highly trained and skilled care
          professionals, ensuring the highest quality of care. The spectrum of
          services offered includes, but is not limited to, elderly care,
          specialised dementia care, mental health support, and creative support,
          demonstrating a commitment to addressing a wide array of care
          requirements.
        </p>
      </div>

      <style jsx>{`
        /* Larger Screens – Original Layout with adjustment */
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          max-width: 1272px;
          margin: 0 auto;
          padding: 64px 16px;
          color: white;
        }
        .client-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 300px;
          margin-top: 12px;
        }
        .client-info,
        .responsibilities {
          width: 100%;
        }
        .overview {
          flex: 1;
          line-height: 2;
          max-width: 100%;
        }
        .title {
          font-size: clamp(20px, 2vw, 24px);
          font-weight: bold;
          margin-bottom: 0;
        }
        .text {
          font-size: clamp(16px, 1.8vw, 20px);
          color: #a4a4a4;
          margin: 0;
        }
        .list {
          padding: 0;
          margin: 0;
          list-style: none;
          font-size: clamp(16px, 1.8vw, 20px);
          color: #a4a4a4;
          line-height: 1.5;
        }
        .description {
          font-size: clamp(16px, 1.8vw, 20px);
          color: #a4a4a4;
          line-height: 2;
          margin-bottom: 16px;
        }

        /* Smaller Screens – Adjustments (900px and Below) */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
          }
          .client-wrapper {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 32px; 
            justify-content: space-between;
            margin-top: 0; 
          }
          .client-info,
          .responsibilities {
            flex: 1;
            max-width: 48%;
          }
          .overview {
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
