import Image from 'next/image';
import WorkTogether from '../../components/LetsWorkTogetherCard';


const Home: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src="/image/shine.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <h1 style={{ textAlign: 'center', marginTop: '70px' }}></h1>
      <WorkTogether />
    </div>
  );
};

export default Home;
