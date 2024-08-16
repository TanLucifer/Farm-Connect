import React from 'react'
import './about.css';
import f1 from '../../../assets/img/f1.jpg';
import img from '../../../assets/img/image.png';

function About() {
  return (
    <>
    
      <div className='bg-green-200  py-8 leading-relaxed place-self-center'>
        <h1 className='text-center text-4xl font-bold py-2 text-green-900'>ABOUT US </h1>
        <h2 className='text-center text-2xl font-semibold text-green-700'>Welcome to <span className='text-yellow-600'>Farm connect</span></h2>
        <h3 className='text-center text-xl text-green-600'>Transforming Eco-Friendly Shopping: Connecting Farmers Directly to Consumers <br />Through Innovative Technology and Sustainable Practices</h3>
      </div>
      <div className='h-80 w-100 m-auto p-4 bg-green-50 mt-2'>
        <h2 className='text-center text-4xl font bold py-2 m-2 text-yellow-500'>OUR MISSION </h2>
        <div className='flex gap-11 w-11/12 p-3'>
          <div className='w-8/12 indent-4 pl-8 text-green-800 font-normal text-2xl'>
            <p>At <span className='text-yellow-600'>Farm connect</span>, our mission is to bridge the gap between local farmers and consumers, fostering a sustainable and community-oriented food system. We believe in the power of fresh, local produce and the importance of supporting our farmers.</p>
          </div>
          <div className='bg-red-400 w-8/12'>
          <img className='w-fit' src={img} alt="" />
          </div>
        </div>
      </div>
      <div className='h-80 w-100 m-auto p-4 bg-green-50 mt-2'>
        <h2 className='text-center text-4xl font bold py-2 m-2'>OUR STORY</h2>
        <div className='flex gap-11 w-11/12 p-3'>
        <div className='w-8/12 indent-4 pl-8 text-green-800 font-normal text-2xl'>
        <p>Born out of a passion for sustainable agriculture and community wellness, <span className='text-yellow-600'>Farm connect</span>was created to empower farmers and provide consumers with access to high-quality, locally sourced products.</p>
          </div>
          <div className='bg-yellow-400 w-screen'>
           
          </div>
        </div>
      </div>
      <div className='h-80 w-100 m-auto p-4 bg-green-50 mt-2'>
        <h2 className='text-center text-4xl font bold py-2 m-2'>OUR VALUES</h2>
        <div className='flex gap-11 w-11/12 p-3'>
          
        <div className='w-8/12 indent-4 pl-8 text-green-800 font-normal text-xl'>
        <li> Sustainability: We prioritize eco-friendly practices in everything we do.</li>
              <li>Community: We believe in supporting local economies and fostering strong community ties.</li>
              <li>Transparency: We provide clear information about our farmers and their practices.</li>
            </div>
          
          <div className='bg-yellow-400 w-screen'></div>
        </div>
      </div>
      <div className='h-80 w-100 m-auto p-4 bg-green-50 mt-2'>
        <h2 className='text-center text-4xl font bold py-2 m-2'>HOW IT WORKS</h2>
        <div className='flex gap-11 w-11/12 p-3'>
        <div className='w-8/12 indent-4 pl-8 text-green-800 font-normal text-2xl'>

            <p>Our user-friendly platform allows consumers to browse local farms, discover fresh products, and place orders directly with growers. We handle the logistics, ensuring a smooth farm-to-table experience</p>
          </div>
          <div className='bg-yellow-400 w-screen'></div>
        </div>
      </div>
    <div>
        <h2 className='text-center text-4xl font bold py-2 m-2'>OUR TEAM</h2>
      </div>
      <div className='flex justify-around items-center w-auto py-2 px-8 place-self-center gap-8'>
      <div className='shadow-2xl hover:ease-in-out 1s '>
        <img className='h-64 place-self-center' src={f1} alt="" />
        <h2> P. M. Bhargava</h2>
            <h3>Location: Andhra Pradesh</h3>
            <p className='text-left'>Contribution: An innovative farmer known for his work in organic farming, P. M. Bhargava has transformed barren land into fertile fields. He practices sustainable agriculture and promotes organic methods, focusing on soil health and biodiversity.</p>
        </div>
        <div className='shadow-2xl hover:ease-in-out 1s '>
        <img className='h-64 place-self-center' src={f1} alt="" />
        <h2 className='text-center'> P. M. Bhargava</h2>
            <h3 className='text-center'>Location: Andhra Pradesh</h3>
            <p className=' text-center'>Contribution: An innovative farmer known for his work in organic farming, P. M. Bhargava has transformed barren land into fertile fields. He practices sustainable agriculture and promotes organic methods, focusing on soil health and biodiversity.</p>
        </div>
        <div className='shadow-2xl hover:ease-in-out 1s '>
        <img className='h-64 place-self-center' src={f1} alt="" />
        <h2> P. M. Bhargava</h2>
            <h3>Location: Andhra Pradesh</h3>
            <p className='text-left'>Contribution: An innovative farmer known for his work in organic farming, P. M. Bhargava has transformed barren land into fertile fields. He practices sustainable agriculture and promotes organic methods, focusing on soil health and biodiversity.</p>
        </div>
         </div>
         
    </>
  )
}

export default About;
