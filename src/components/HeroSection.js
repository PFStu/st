import React from 'react';

const HeroSection = () => {
	  return (
		      <section className="bg-gradient-to-r from-purple-300 to-purple-600 text-white h-screen flex items-center justify-center text-center">
		        <div>
		          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">欢迎来到Pixel Forge Studio</h1>
		          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">我们为<b>Everyone</b>提供<b>最具创意和创新的</b>设计解决方案。</p>
		          <a href="#about" className="bg-white text-black py-2 px-6 rounded-full text-xl hover:bg-gray-200 transition duration-300">了解更多</a>
		        </div>
		      </section>
		    );
};

export default HeroSection;
