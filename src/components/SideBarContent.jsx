import React, { useState } from "react";
import { Typography } from '@mui/material';

const SideBarContent = ({ active }) => {


  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-[55vw] ml-14 rounded-lg bg-white">
            <div className="relative pl-10 pr-5 pb-6 pt-8">
              <p className="text-2xl font-semibold text-center">Welcome to <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Health Centre</span></p>
              <br />
              <Typography> Welcome to the Health Center of IIT Bhilai, your dedicated resource for health and wellness on campus. Our center is committed to promoting the well-being of our students, faculty, and staff through comprehensive healthcare services and support.

              We understand that a healthy body and mind are essential for academic success and personal growth. That's why our Health Center offers a wide array of services tailored to meet the diverse needs of our campus community. From routine check-ups to specialized care, we strive to provide accessible and compassionate healthcare to all.

              At the Health Center, we take a holistic approach to healthcare, recognizing the interconnectedness of physical, mental, and emotional well-being. Our team of experienced healthcare professionals is dedicated to addressing not just the symptoms, but also the underlying factors contributing to your health concerns.</Typography>
              <br />
              <Typography> Furthermore, we believe that education is key to empowering individuals to take control of their health. That's why we offer health education programs and workshops aimed at equipping our campus community with the knowledge and skills to make informed decisions about their well-being.

              Whether you're seeking medical care, emotional support, or health education, the Health Center of IIT Bhilai is here to serve you. Your health is our priority, and we're committed to helping you thrive academically, professionally, and personally. Visit us today and take the first step towards a healthier, happier you.</Typography>
            
              <br />
              <br />
              <div className="flex justify-center">
                <img src="home_img.png" alt="pic" className="rounded-xl w-[50vw]"/>
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};

