import React from 'react';
import bgimg from '../../../src/images/question_mark.jpg';
import google from '../../images/google.png'

const Home = () => {
    return (
        <div
            className="text-white w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className='absolute bg-[#0c090958] z-0 w-full h-full'></div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
            <div className="content px-4 relative z-10">
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex justify-center items-center w-full'>
                        <div className="w-[60%] text-center">
                            <h1 className="text-5xl w-[80%] font-serif animate-bounce mt-5-">
                                Enquire <br /><span className="text-orange-500 ">Portal</span><br />Website
                            </h1>
                            <p className="par my-6 text-lg w-[80%]">
                                START YOUR QUEST FOR KNOWLEDGE: " Seeking information? Our enquiry portal is here to help. Ask, explore, and discover the world around you. This website is a central place for making enquiries on various topics and let us assist you. Submit your enquiry through our portal and start your enquiry journey with us today."
                            </p>
                            <button className="bg-orange-500 mr-[20%] text-black py-2 px-4 mb-4 rounded-full hover:bg-white hover:text-black transition">
                                <a href="#">JOIN US</a>
                            </button>
                        </div>
                        <div className="form bg-gray-900 bg-opacity-80 rounded-lg mt-10 w-1/2 max-w-xs mx-auto mb-2">
                            <div className='p-2'><h2 className="text-orange-500 bg-white rounded py-2 px-2 mb-4 ">Login Here</h2></div>
                            <input type="email" name="email" placeholder="Enter Email Here" className="w-full bg-transparent border-b border-orange-500 py-2 px-4 mb-4 text-white focus:outline-none" />
                            <input type="password" name="password" placeholder="Enter Password Here" className="w-full bg-transparent border-b border-orange-500 py-2 px-4 mb-4 text-white focus:outline-none" />
                            <div className='p-2'>
                            <button className="btnn bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-white hover:text-orange-500 transition">
                                <a href="#">Login</a>
                            </button>
                            </div>
                            <p className="link text-center mt-4 text-lg"> 
                                Don't have an account<br />
                                <a href="#" className="text-orange-500">Sign up </a>here
                            </p>
                            <img src={google} className="imgG w-20 h-20 mx-auto mt-4" alt="Google Sign-In" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
