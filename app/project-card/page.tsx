import ProjectCard from '@/components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <div style={{
        backgroundColor: 'black',
        position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: "4.9"
           
}}>
       
      <ProjectCard />
    </div>
  );
};

export default HomePage;
