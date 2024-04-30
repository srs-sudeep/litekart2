import React from "react";
import SideBarContent from "../../components/Main/SideBarContent";
import SidebarLeft from "../../components/Main/SideBarLeft";
const Home = () => {
  return (
    <div>
      {/* <Header activeHeading={1} /> */}
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <SidebarLeft active={active} setActive={setActive} />
        </div>
        <SideBarContent active={active} />
        {/* Add the sidebar on the right side */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

