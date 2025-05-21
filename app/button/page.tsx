import React from 'react';
import ButtonWithIcon from '../../components/Buttons'; 

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Pass the email prop to ButtonWithIcon */}
      <ButtonWithIcon email="lajimohofficial@gmail.com" />
    </div>
  );
};

export default Home;


