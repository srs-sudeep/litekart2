import Carousel from "../components/Carousel";
import React, { useState } from "react";
// import SideBarContent from "../components/SideBarContent";
import styles from "../styles"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
// import SidebarLeft from "../components/SideBarLeft";

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


  const [active, setActive] = useState(1);
  return (

    <div>
      <Header  />
      <div style={containerStyles}>
        <Carousel slides={slides} />
      </div>

      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        {/* <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]"> */}
          {/* <SidebarLeft active={active} setActive={setActive} /> */}
        {/* </div> */}
        {/* <SideBarContent active={active} /> */}
        {/* Add the sidebar on the right side */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;