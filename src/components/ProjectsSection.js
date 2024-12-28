import React from 'react';

const ProjectsSection = () => {
	  return (
		      <section className="py-20 bg-white">
		        <div className="max-w-6xl mx-auto text-center">
		          <h2 className="text-4xl font-bold mb-10">我们的项目</h2>
		          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
		            <div className="shadow-lg rounded-lg overflow-hidden">
		              <img src="https://via.placeholder.com/400" alt="Project 1" className="w-full h-64 object-cover" />
		              <div className="p-6">
		                <h3 className="text-xl font-semibold">项目名称 1</h3>
		                <p className="mt-2 text-gray-600">项目描述可以在这里展示。</p>
		              </div>
		            </div>
		            <div className="shadow-lg rounded-lg overflow-hidden">
		              <img src="https://via.placeholder.com/400" alt="Project 2" className="w-full h-64 object-cover" />
		              <div className="p-6">
		                <h3 className="text-xl font-semibold">项目名称 2</h3>
		                <p className="mt-2 text-gray-600">项目描述可以在这里展示。</p>
		              </div>
		            </div>
		            <div className="shadow-lg rounded-lg overflow-hidden">
		              <img src="https://via.placeholder.com/400" alt="Project 3" className="w-full h-64 object-cover" />
		              <div className="p-6">
		                <h3 className="text-xl font-semibold">项目名称 3</h3>
		                <p className="mt-2 text-gray-600">项目描述可以在这里展示。</p>
		              </div>
		            </div>
		          </div>
		        </div>
		      </section>
		    );
};

export default ProjectsSection;
