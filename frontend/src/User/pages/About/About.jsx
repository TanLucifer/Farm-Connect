import React from 'react';
import './about.css';
import f1 from '../../../assets/img/f1.jpg';
import img from '../../../assets/img/image.png';


function About() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat py-8 leading-relaxed h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url("https://st3.depositphotos.com/11802848/18262/v/450/depositphotos_182628364-stock-illustration-farmer-with-a-couple-of.jpg")` }}
      >
        <h1 className="text-center text-7xl font-bold py-2 text-green-900">ABOUT US</h1>
        <h2 className="text-center text-6xl font-semibold text-green-700">
          Welcome to <span className="text-yellow-600">Farm Connect</span>
        </h2>
        <h3 className="text-center text-2xl text-green-600">
          Transforming Eco-Friendly Shopping: Connecting Farmers Directly to Consumers
          <br />
          Through Innovative Technology and Sustainable Practices
        </h3>
      </div>

      <section className="h-[80vh] p-4 bg-green-50 mt-2">
        <h2 className="text-center text-4xl font-bold py-2 m-2 text-yellow-500">OUR MISSION</h2>
        <div className="flex gap-11 w-11/12 p-3 items-center justify-between">
          <div className="w-1/2 pl-8 text-green-800 font-normal text-2xl">
            <p>
              At <span className="text-yellow-600">Farm Connect</span>, our mission is to bridge the gap between
              local farmers and consumers, fostering a sustainable and community-oriented food system. We believe in
              the power of fresh, local produce and the importance of supporting our farmers.
            </p>
          </div>
          <div className="bg-green-400 w-[60%] rounded-md h-[60vh] border box-border p-2">
            <img className="w-full h-full object-cover rounded-md" src={img} alt="Farm Connect" />
          </div>
        </div>
      </section>

      <section className="h-[80vh] p-4 bg-green-50 mt-2">
        <h2 className="text-center text-4xl font-bold py-2 m-2 text-yellow-500">OUR STORY</h2>
        <div className="flex gap-11 w-11/12 p-3 items-center justify-between flex-row-reverse">
          <div className="w-1/2 pl-8 text-green-800 font-normal text-2xl">
            <p>
              Born out of a passion for sustainable agriculture and community wellness, <span className="text-yellow-600">Farm Connect</span> was created to empower farmers and provide consumers with access to high-quality, locally sourced products.
            </p>
          </div>
          <div className="bg-green-400 w-[60%] rounded-md h-[60vh] border box-border p-2">
            <img className="w-full h-full object-cover rounded-md" src={img} alt="Farm Connect" />
          </div>
        </div>
      </section>

      <section className="h-[80vh] p-4 bg-green-50 mt-2">
        <h2 className="text-center text-4xl font-bold py-2 m-2 text-yellow-500">OUR VALUES</h2>
        <div className="flex gap-11 w-11/12 p-3 items-center justify-between">
          <div className="w-1/2 pl-8 text-green-800 font-normal text-2xl">
            <ul>
              <li>Sustainability: We prioritize eco-friendly practices in everything we do.</li>
              <li>Community: We believe in supporting local economies and fostering strong community ties.</li>
              <li>Transparency: We provide clear information about our farmers and their practices.</li>
            </ul>
          </div>
          <div className="bg-green-400 w-[60%] rounded-md h-[60vh] border box-border p-2">
            <img className="w-full h-full object-cover rounded-md" src={img} alt="Farm Connect" />
          </div>
        </div>
      </section>
      <section className="h-[80vh] p-4 bg-green-50 mt-2">
        <h2 className="text-center text-4xl font-bold py-2 m-2 text-yellow-500">HOW IT WORKS</h2>
        <div className="flex gap-11 w-11/12 p-3 items-center justify-between flex-row-reverse">
          <div className="w-1/2 pl-8 text-green-800 font-normal text-2xl">
            <p>
              Our user-friendly platform allows consumers to browse local farms, discover fresh products, and place
              orders directly with growers. We handle the logistics, ensuring a smooth farm-to-table experience.
            </p>
          </div>
          <div className="bg-green-400 w-[60%] rounded-md h-[60vh] border box-border p-2">
            <img className="w-full h-full object-cover rounded-md" src={img} alt="Farm Connect" />
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-center text-4xl font-bold py-2 m-2 text-yellow-400">OUR TEAM</h2>
      </div>
      <div className="flex justify-around items-center w-auto py-2 px-8 place-self-center gap-8 h-[70vh]">

        {/* Example Farmer Card */}
        <div className="rounded-md w-6/12 bg-white p-2 h-96 border-[2px] border-gray-400">
          <img className="h-52 w-full object-cover" src={f1} alt="P. M. Bhargava" />
          <h2 className='font-bold text-xl'>P. M. Bhargava</h2>
          <h3><span className='font-bold'>Location:</span> Andhra Pradesh</h3>
          <p className="text-left text-sm">
            <span className='font-bold'>Contribution:</span> An innovative farmer known for his work in organic farming, P. M. Bhargava has transformed barren land into fertile fields. He practices sustainable agriculture and promotes organic methods, focusing on soil health and biodiversity.
          </p>
        </div>

        {/* You can duplicate this for other farmers */}
        <div className="rounded-md w-6/12 bg-white p-2 h-96 border-[2px] border-gray-400">
          <img className="h-52 w-full object-cover" src={f1} alt="Rakesh Nandi" />
          <h2 className='font-bold text-xl'>Rakesh Nandi</h2>
          <h3><span className='font-bold'>Location:</span>West Bengal</h3>
          <p className="text-left text-sm">
            <span className='font-bold'>Contribution:</span> A progressive farmer who has successfully implemented integrated farming systems, growing multiple crops while raising fish and practicing animal husbandry.
          </p>
        </div>

        <div className="rounded-md w-6/12 bg-white p-2 h-96 border-[2px] border-gray-400">
          <img className="h-52 w-full object-cover" src={f1} alt="Vivek Patil" />
          <h2 className='font-bold text-xl'>Vivek Patil</h2>
          <h3><span className='font-bold'>Location:</span> Maharashtra</h3>
          <p className="text-left text-sm">
            <span className='font-bold'>Contribution:</span> Known for his innovative approaches to farming, including drip irrigation and polyhouse farming for high-value crops like strawberries.
          </p>
        </div>
      </div>
      <div>
     
      </div>
    </>
  );
}

export default About;