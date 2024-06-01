import React from 'react';
import image1 from '../../images/company.jpg';


const About = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={image1} alt="Slider Image 1" className="w-full h-full object-cover " />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center z-0 text-white text-center">
          <div className='relative w-[90%] p-8 border-2 border-[#414142] rounded-md '>
            <div className='absolute top-0 left-0 bg-black opacity-20 w-full h-full'></div>
          <div className='grid grid-cols-2 gap-[1rem]'>
              <div>
                <h1 className="text-5xl font-bold mt-16 font-serif animate-bounce mt-5- text-white" >About Us? </h1>  
              <h1 className="text-5xl font-bold mt-8 font-serif animate-bounce mt-5- text-white">Hi,we're UPFLAIRS!</h1>
              </div>
              <p className="text-[20PX] text-left text-white " >UpFlairs is an innovative educational technology company dedicated to empowering students across India. With a focus on emerging technologies like AI/ML, Data Science, Cloud computing, Devops , Full Stack Web Development, Embedded System,IoT and Robotics. We’ve educated over 50K+ students worldwide, including those from prestigious institutions like IITs and NITs , Deemed Universities and Other engineering Colleges. Our courses are meticulously designed to equip students with practical skills for tech-driven careers, and we also provide lab setups to colleges, universities, and project solutions to companies in AI-ML,Web Development, IoT, Robotics, Cloud & DevOps domains.
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
