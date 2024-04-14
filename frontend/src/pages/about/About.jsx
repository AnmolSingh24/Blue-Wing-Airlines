import React from 'react';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <>
      <div className="bg-cover bg-center" style={{ height: "20rem", backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1712809843/About-banner_ws3t3l.webp')" }}>
        <div className="ml-16 md:ml-20 lg:ml-24 font-bold text-4xl text-gray-300 lg:p-16">
          <h1>ABOUT US</h1>
        </div>

        <div>
          <div className="bg-gray-100 w-full md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto lg:mt-24 p-6 md:p-8 rounded-lg">
            <h1 className="text-center py-6 text-2xl">About <span className="text-blue-500"><span className='text-blue-800 font-bold'>BLUE</span> Wing Airlines</span></h1>
            <section>
              <div className="max-w-4xl mx-auto leading-6">
                <p className="mb-4">Welcome to Blue Wing Airlines, your premier choice for air travel. With a commitment to safety,
                  comfort, and exceptional service, we strive to provide an unparalleled flying experience.</p>
                <p className="mb-4">Our fleet of modern aircraft is equipped with state-of-the-art technology and amenities, ensuring
                  a smooth and enjoyable journey for our passengers. From short domestic flights to long-haul
                  international trips, we cover a wide range of destinations across the globe.</p>
                <p className="mb-4">At Blue Wing Airlines, we value our customers and their satisfaction is our top priority. Our
                  friendly and professional staff is dedicated to delivering a personalized and memorable travel
                  experience for each passenger.</p>
                <p className="mb-8">Explore the world with Blue Wing Airlines and discover the true joy of flying. Book your next
                  flight with us and embark on an extraordinary adventure!</p>

                <div className="flex gap-6 mb-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="font-bold mb-2 text-center">The Blue Wing Group</h3>
                    <p className="mb-4">Blue Wing Airlines is a part of the renowned Blue Wing Group, a leading aviation
                      conglomerate with a strong presence in the industry. The group is committed to
                      delivering excellence in air travel and operates multiple airlines, catering to various
                      regions and market segments.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="font-bold mb-2 text-center">Ownership</h3>
                    <p className="mb-4">Blue Wing Airlines is privately owned and operated. The company is backed by a team of
                      seasoned aviation professionals and experienced investors who bring a wealth of
                      knowledge and expertise to the airline.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="font-bold mb-2 text-center">Establishment</h3>
                    <p className="mb-4">Blue Wing Airlines was established in 2023 with the vision of providing exceptional air
                      travel experiences to passengers around the world. Since then, we have grown steadily,
                      expanding our route network and fleet size to meet the evolving needs of our customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-evenly">
                  <div className="w-64 bg-gray-200 p-2.5 rounded-lg">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484844/About-Safety_yrfrdj.jpg" alt="Safety" className="mx-auto mb-4 h-40" />
                    <h3 className="font-bold mb-2 text-center">Safety First</h3>
                    <p className="text-gray-700">We prioritize the safety and security of our passengers. Our experienced pilots and crew
                      adhere to the highest safety standards, ensuring a worry-free travel experience.</p>
                  </div>
                  <div className="w-64 bg-gray-200 p-2.5 rounded-lg">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484952/unmatched-comfort_q5tv00.webp" alt="Comfort" className="mx-auto mb-4 h-40" />
                    <h3 className="font-bold mb-2 text-center">Unmatched Comfort</h3>
                    <p className="text-gray-700">Experience unmatched comfort in our spacious cabins with plush seating, ample legroom,
                      and in-flight entertainment. Sit back, relax, and enjoy your journey with us.</p>
                  </div>
                  <div className="w-64 bg-gray-200 p-2.5 rounded-lg">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484896/exceptional-service_pl2m5e.jpg" alt="Exceptional Service" className="mx-auto mb-4 w-60 h-40" />
                    <h3 className="font-bold mb-2 text-center">Exceptional Service</h3>
                    <p className="text-gray-700">Our dedicated cabin crew is committed to delivering exceptional service. From a warm
                      welcome to personalized assistance, we go the extra mile to make your flight memorable.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About;