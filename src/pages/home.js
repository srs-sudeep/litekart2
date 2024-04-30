import Carousel from "../components/Carousel";

const Home = () => {

  const slides = [
    { url: "https://picsum.photos/seed/img1/600/400", title: "beach" },
    { url: "https://picsum.photos/seed/img2/600/400", title: "boat" },
    { url: "https://picsum.photos/seed/img3/600/400", title: "forest" },
  ];

  const containerStyles = {
    width: "300px",
    height: "350px",
    margin: "0 auto",
    border: "2px solid black",
    borderRadius: "8px",
  };
  return (
    <div>
      <div style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Home;

