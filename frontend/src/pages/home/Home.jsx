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
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1696002513/Carasuel-3_iriinl.webp" className='w-full h-96' text="Third slide" />
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

const ReadyToTravel = ({ img1, img2, img3, link1, link2, link3 }) => {
    return (
        <div className="travel-img flex justify-center items-center mt-8">
            <div>
                <img src={img1} />
                <div>
                    <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link1}</a>
                </div>
            </div>
            <div className="ml-4">
                <img src={img2} alt="before-you-fly" className='w-[38rem] h-60 -mb-4 rounded-lg' />
                <div>
                    <a href="/Travel/Documents/Visa.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link2}</a>
                </div>
                <img src={img3} alt="airport-information" className='w-[38rem] h-52 mt-8 -mb-4 rounded-lg' />
                <div>
                    <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link3}</a>
                </div>
            </div>
        </div>
    );
}

const BlueWingCabin = ({ img1, img2, img3, link1, link2, link3 }) => {
    return (
        <div className="travel-img flex justify-center items-center mt-8">
            <div>
                <img src={img1} alt="/generous-baggage" className="w-[38rem] h-[35rem] -mb-4 rounded-lg" />
                <div className="btn">
                    <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link1}</a>
                </div>
            </div>
            <div className="ml-4">
                <img src={img2} alt="before-you-fly" className='w-[38rem] h-[15.8rem] -mb-4 rounded-lg' />
                <div className="btn">
                    <a href="/Travel/Documents/Visa.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link2}</a>
                </div>
                <img src={img3} alt="airport-information" className='w-[38rem] h-[15.8rem] mt-8 -mb-4 rounded-lg' />
                <div className="btn">
                    <a href="/Travel/Baggage/Baggage.html" className="px-10 py-2 text-lg font-bold bg-blue-200 text-blue-900 border-4 border-white hover:bg-blue-700 hover:text-white transition duration-500 rounded-lg">{link3}</a>
                </div>
            </div>
        </div>
    );
}

const AsideSection = () => {
    return (
        <div className='fixed'>
            <aside className='relative flex justify-end z-10 w-20 h-20 top-[35rem] left-[88rem]'>
                <button className='absolute flex items-center gap-2 bg-blue-200 w-36 p-2 rounded-full'>
                    <p className='font-bold text-lg text-gray-600'>Ask devi</p>
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1696690879/upload/ef7dxqgzydru8uyp0uqv.png" alt="Ask-Devi-Img" className="h-12 w-12 rounded-full bg-blue-300 shadow-md" />
                </button>
            </aside>
        </div>
    );
};

const TravelInfo = () => {
    return (
        <div className="text-center pt-2">
            <CarouselSlider />
            <p className="text-blue-600 text-2xl pt-16"><span className='font-bold text-blue-800'>Ready</span> To Travel</p>
            <h4 className="text-gray-500 text-lg">From booking services to help in travel plans, you can expect a lot along your journey.</h4>

            <ReadyToTravel
                img1="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484896/generous-baggage_mffl4g.webp"
                link1="Learn More"
                img2="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484943/tips-reminders_pckz3y.webp"
                link2="Learn More"
                img3="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484844/airport-information_ibqiq3.webp"
                link3="Learn More"
            />

            <p className="text-blue-600 text-2xl pt-16"><span className='font-bold text-blue-800'>BLUE</span> WING CABIN</p>
            <BlueWingCabin
                img1="https://res.cloudinary.com/djdblxcxt/image/upload/v1712805043/business-class-cabin_vs0fmv.jpg"
                link1="Know More"
                img2="https://res.cloudinary.com/djdblxcxt/image/upload/v1712892777/premium-economy-class_valrld.png"
                link2="Know More"
                img3="https://res.cloudinary.com/djdblxcxt/image/upload/v1712764058/standard-economy-cabin_nkmmxk.png"
                link3="Know More"
            />

            <div className="flex items-center justify-center mt-16">
                <div className="flex items-center justify-between gap-20">
                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <GiNewspaper className='w-8 h-8' />
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <GiCargoCrate className='w-8 h-8' />
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <FaQuestion className='w-8 h-8' />
                    </div>

                    <div className="border-2 border-gray-400 p-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-500 cursor-pointer">
                        <IoCallOutline className='w-8 h-8' />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <AsideSection />
                <TravelInfo />
                <Footer />
            </div>
        </>
    )
}

export default Home