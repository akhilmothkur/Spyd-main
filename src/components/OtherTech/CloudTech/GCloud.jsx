import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from '../../CallToAction'
import Footer from '../../Footer';
import main from "../../../assets/othertech/google/main.png";
import image from "../../../assets/othertech/google/image.png";
import bgimage from "../../../assets/othertech/google/bgimage.png"

function GCloud() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
    data-aos="fade-zoom-in"
  className="relative bg-cover bg-center md:h-96 h-44 flex items-center justify-center"
  style={{
    backgroundImage: `url(${main})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-black opacity-10"></div>

  {/* Centered text content */}
  {/* <div className='space-y-5'>
  <h1 className="relative text-4xl text-center text-white">
    AI & Machine Learning
  </h1>
  <p className="relative text-xl text-center text-white ">
  We're working hard to bring you something amazing.
  </p>
  <p className='relative text-xl text-center text-white'> Stay tuned!</p>
  </div> */}
</div>

<div className="bg-white">
      {/* Welcome Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent ">
          <h1 
          data-aos="fade-down"
          className="md:text-3xl text-xl lg:text-3xl font-  leading-tight">
            Welcome to our{" "}
            <span className=" ">SpY D Technology</span>{" "}
            website Google Cloud
          </h1>
          <p 
          data-aos="fade-right"
          className="text-[#141414] mt-4 md:text-lg text-sm leading-relaxed text-justify">
            SpY D Technology revolutionizes website design by offering dynamic
            and immersive experiences that stand out in a crowded online
            landscape. With SpY D, designers can unleash their creativity and
            build websites that not only look visually stunning but also deliver
            exceptional user experiences.
          </p>
          {/* Buttons */}
          <div 
          data-aos="fade-right"
          className="mt-6 flex md:justify-center justify-start lg:justify-start md:text-lg  text-sm space-x-4">
            <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  text-white px-4 py-2 md:px-10 md:py-3 rounded-md shadow-md hover:bg-blue-700">
              Get Started
            </button>
            <button className="border-2 border-blue-600 bg-gradient-to-b from-[#38bdf8] px-4 py-2 to-blue-700 bg-clip-text text-transparent  md:px-10 md:py-3 rounded-md hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="lg:w-1/2">
          <img
          data-aos="fade-up"
           src={image}
           alt="Google Cloud Illustration"
            className="md:w-[487px] md:h-[298px] "
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto md:px-6 px-3 md:-mt-10">
        <h2 
        data-aos="fade-down"
        className="md:text-2xl text-lg lg:text-3xl  bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  text-center">
          Key features of SpY D Technology include
        </h2>
        <div className="md:mt-8 mt-2 md:space-y-4 space-y-2">
          {/* Feature Cards */}
          {[
            "Dynamic content presentation",
            "Interactive elements and animations",
            "Scalable infrastructure solutions",
            "Optimized for cloud platforms",
          ].map((feature, index) => (
            <div
            data-aos="fade-right"
              key={index}
              className="border-2 border-blue-400 rounded-md md:p-4 py-2 px-1 text-start text-blue-600 hover:shadow-lg transition"
            >
              {feature}
            </div>
          ))}
        </div>
        <h1 
        data-aos="fade-right"
        className='md:text-3xl text-lg text-center bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  py-10'>Unmatched Scalability and Performance on Google Cloud Platform</h1>
     <p 
     data-aos="fade-down"
     className='md:text-xl text-sm'>Hosting SpY D-powered websites on the Google Cloud 
        Platform ensures unparalleled scalability and performance.
         GCP's global network of data centers ensures lightning-fast loading times and high availability, 
         regardless of the geographical location of users.</p>
      </section>
    </div>
    <div className="bg-white flex flex-col md:flex-row justify-center px-2 md:px-0">
      {/* Benefits Section */}
      <div>
      <section className="max-w-6xl mx-auto md:px-6 md:py-16 py-5">
        <h2 
        data-aos="fade-right"
        className="md:text-2xl lg:text-2xl  text-lg bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  text-start">
          Benefits of hosting SpY D websites on GCP include
        </h2>

        <div className="mt-6 space-y-4">
          <h3 className="text-lg  bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent ">What's included</h3>
          {/* Features List */}
          
          <ul className="list-none space-y-3 text-[#141414] md:text-lg text-sm">
            {[
              "Automatic scaling to handle traffic spikes",
              "Built-in CDN for optimized content delivery",
              "Enterprise-grade security and compliance features",
              "Advanced analytics for monitoring website performance",
            ].map((item, index) => (
              <li
              data-aos="fade-right"
              key={index} className="flex items-center space-x-2">
                <span className="text-xl">➜</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
        </div>

        {/* Diamond-shaped Card */}
       
      </section>

      {/* Seamless Integration Section */}
      <section className="max-w-4xl mx-auto md:px-6 py-1 text-start">
        <h2 
        data-aos="fade-down"
        className="md:text-2xl lg:text-2xl  text-lg bg-gradient-to-b from-[#38bdf8] to-blue-700 bg-clip-text text-transparent ">
          Seamless Integration and Collaboration
        </h2>
        <p 
        data-aos="fade-right"
        className="mt-4 md:text-lg text-sm text-[#141414]  text-justify">
          Integrating SpY D Technology with Google Cloud Platform is semless,
          thanks to GCP's comprehensive suite of tools and services for web
          development. Designers and developers can collaborate effortlessly
          using familiar tools like Google Workspace and GitHub, streamlining
          the development process and accelerating time to market.
        </p>
      </section>
      </div>


      <div className="mt-12 flex justify-center items-center"
      
      >
          <div
          data-aos="fade-down"
          className="relative"
          >
            <div 
            
            className="md:w-64 md:h-64 transform rotate-45 bg-gradient-to-br from-blue-400 to-purple-500 flex justify-center items-center"
             style={{
                backgroundImage: `url(${bgimage})`,
              }}>
              <div className="w-48 h-48 transform -rotate-45  flex flex-col justify-center items-center p-4 text-center">
                <h4 className="text-xs uppercase font-bold text-[#141414]">Here We Are</h4>
                <p className="text-sm text-gray-600">
                  What started as a tiny team mostly dedicated to Air Quality
                  has grown.
                </p>
              </div>
            </div>
          </div>
        </div>
    
    </div>
    <section className="max-w-6xl md:h-[316px] md:space-y-10 text-center mx-auto mt-10  px-6 py-1 rounded-lg bg-gradient-to-r from-blue-700 to-[#38bdf8]">
        <h2 
        data-aos="fade-down"
        className="md:text-2xl text-xl lg:text-3xl text-center mt-10 text-white ">
        Getting Started with SpY D on Google Cloud
        </h2>
        <div className='text-center justify-center  '>
        <p 
        data-aos="fade-right"
        className='text-white md:px-[22%] md:text-lg  text-sm md:pb-10'>
        Ready to elevate your website design with SpY D Technology
         on Google Cloud Platform? Follow these steps to get started 
        </p>

        <button 
        data-aos="fade-right"
        className="border-2 text-sm md:text-lg border-white bg-white text-blue-600 px-2 py-1 md:px-6 md:py-3 rounded-md hover:bg-blue-50">
              Learn More
            </button>
        </div>
       
       
      </section>
    <CallToAction />
    <Footer />

    </div>
  )
}

export default GCloud