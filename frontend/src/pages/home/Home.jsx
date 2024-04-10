import React, { useState } from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { GiNewspaper } from "react-icons/gi";
import { GiCargoCrate } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1696002513/Carasuel-1_oqwzb7.webp" className='w-full h-96' text="Third slide" />
                <Carousel.Caption>
                    <h1 className='font-semibold text-4xl'>FLY PREMIUM ECONOMY AT SPECIAL FARES</h1>
                    <p className='text-lg'>Starting @ INR 136,699* for IN - USA USD 1599* for USA - IN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1696002515/Carasuel-2_ubc8w7.webp" className='w-full h-96' text="Second slide" />
                <Carousel.Caption>
                    <h1 className='font-semibold text-4xl'>Second slide label</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760432/Carousel1_uhrxca.webp" className='w-full h-96' text="First slide" />
                <Carousel.Caption>
                    <h1 className='font-semibold text-4xl'>First slide label</h1>
                    <p className='text-lg'>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1696002513/Carasuel-4_bcb2gb.webp" className='w-full h-96' text="Third slide" />
                <Carousel.Caption>
                    <h1 className='font-semibold text-4xl'>Third slide label</h1>
                    <p className='text-lg'>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const PrepareToTravel = () => {
    return (
        <div className="text-center pt-2">
            <CarouselSlider />
            <p className="text-blue-600 text-2xl pt-16"><span className='font-bold text-blue-800'>Ready</span> To Travel</p>
            <h4 className="text-gray-500 text-lg">From booking services to help in travel plans, you can expect a lot along your journey.</h4>
            <div className="travel-img flex justify-center items-center mt-8">
                <div>
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484896/generous-baggage_mffl4g.webp" alt="/generous-baggage" className="w-[38rem] h-[25rem] -mb-4 rounded-lg" />
                    <div className="btn">
                        <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Learn More</a>
                    </div>
                </div>
                <div className="ml-8">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484943/tips-reminders_pckz3y.webp" alt="before-you-fly" className='w-[38rem] h-60 -mb-4 rounded-lg' />
                    <div className="btn">
                        <a href="/Travel/Documents/Visa.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Learn More</a>
                    </div>
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484844/airport-information_ibqiq3.webp" alt="airport-information" className='w-[38rem] h-60 mt-8 -mb-4 rounded-lg' />
                    <div className="btn">
                        <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Learn More</a>
                    </div>
                </div>
            </div>

            <p className="text-blue-600 text-2xl pt-16"><span className='font-bold text-blue-800'>BLUE</span> WING CABIN</p>
            <div className="travel-img flex justify-center items-center mt-8">
                <div>
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712762014/business-class-cabin_xb8nnp.png" alt="/generous-baggage" className="w-[38rem] h-[35rem] -mb-4 rounded-lg" />
                    <div className="btn">
                        <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Know More</a>
                    </div>
                </div>
                <div className="ml-8">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712761975/premium-economy-cabin_n8enfn.png" alt="before-you-fly" className='w-[38rem] h-60 -mb-4 rounded-lg' />
                    <div className="btn">
                        <a href="/Travel/Documents/Visa.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Know More</a>
                    </div>
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712762058/standard-economy-cabin_nkmmxk.png" alt="airport-information" className='w-[38rem] h-60 mt-8 -mb-4 rounded-lg' />
                    <div className="btn">
                        <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">Know More</a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-16">
                <div className="flex items-center justify-between gap-20">
                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <GiNewspaper className='w-8 h-8' />

                        {/* <div>
                            <p><a href="/About/Press/Media.html" className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300">Latest News</a></p>
                        </div> */}
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <GiCargoCrate className='w-8 h-8' />

                        {/* <div className="Info-Name">
                            <p><a href="/About/Cargo/Cargo.html" className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300">Cargo</a></p>
                        </div> */}
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <FaQuestion className='w-8 h-8' />

                        {/* <div className="Info-Name">
                            <p><a href="/Support/FAQ/Query.html" className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300">FAQ</a></p>
                        </div> */}
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <IoCallOutline className='w-8 h-8' />

                        {/* <div className="Info-Name">
                            <p><a href="/Support/Help/Help.html" className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300">Contact</a></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

// const AsideSection = () => {
//     return (
//         <aside className="mt-20 ml-96">
//             <div>
//                 <abbr title="Ask Devi">
//                     <img src="/images/Aside-Message-Img.png" alt="Aside-Message-Img" className="h-32 w-32 rounded-full bg-blue-300 shadow-md" />
//                 </abbr>
//             </div>
//         </aside>
//     );
// };

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <PrepareToTravel />
                {/* <AsideSection /> */}
                <Footer />
            </div>
        </>
    )
}

export default Home