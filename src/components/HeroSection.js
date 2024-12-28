import React from 'react';

const HeroSection = () => {
	  return (
		      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center justify-center text-center">
		        <div>
		          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">欢迎来到我们的创意工作室</h1>
		          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">我们为客户提供最具创意和创新的设计解决方案。</p>
		          <a href="#about" className="bg-white text-black py-2 px-6 rounded-full text-xl hover:bg-gray-200 transition duration-300">了解更多</a>
		        </div>
		      </section>
		    );
};

export default HeroSection;
