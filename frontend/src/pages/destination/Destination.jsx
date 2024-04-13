import React, { useState, useEffect } from 'react';

const destinationData = [
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484882/Destination-Img1_hqt57l.jpg`,
    title: "India",
    info: "India has many customs and rituals that may seem bizarre to anyone.",
    url: `/Destination/Country/India/India.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484884/Destination-Img2_b7ngws.jpg`,
    title: "South Korea",
    info: " Known for its technological advancements, K-pop culture, and historic sites.",
    url: `/Destination/Country/South-Korea/SouthKorea.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484883/Destination-Img3_fygiwc.jpg`,
    title: "UAE",
    info: "Known for its modern skyscrapers,iconic landmarks like Burj Khalifa.",
    url: `/Destination/Country/UAE/UAE.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484884/Destination-Img4_u1wgoc.jpg`,
    title: "Greece",
    info: "Know for its ancient history, picturesque island and santorini's sunsets.",
    url: `/Destination/Country/South-Korea/SouthKorea.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484883/Destination-Img5_wvqgls.jpg`,
    title: "USA",
    info: "Experience the bustling metropolis and rich cultural heritage.",
    url: `/Destination/Country/USA/USA.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484884/Destination-Img6_dbe6iy.webp`,
    title: "Netherlands",
    info: "Known for its tulip fields, charming canals, and cultural landmarks.",
    url: `/Destination/Country/Netherlands/Netherlands.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484887/Destination-Img7_idmydx.jpg`,
    title: "China",
    info: "China is a great country with great Chinese culture by fascinating people.",
    url: `/Destination/Country/China/China.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484884/Destination-Img8_h2l1bs.jpg`,
    title: "Thailand",
    info: "Having never taken a decent holiday before, then visit on a trip to Thailand.",
    url: `/Destination/Country/Thailand/Thailand.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484884/Destination-Img9_hcnwiq.avif`,
    title: "Japan",
    info: "Famous for its advanced technology, unique pop culture, and traditional arts.",
    url: `/Destination/Country/Japan/Japan.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484885/Destination-Img10_i5p7om.jpg`,
    title: "United Kingdom",
    info: "Known for its historic castles, royal heritage, and contributions to literature.",
    url: `/Destination/Country/UK/UK.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484885/Destination-Img11_pqsa4h.jpg`,
    title: "France",
    info: "Famous for its exquisite cuisine, art museums, and romantic ambiance.",
    url: `/Destination/Country/France/France.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484890/Destination-Img12_w2lhpn.jpg`,
    title: "Germany",
    info: "Famous for its engineering prowess, Oktoberfest celebrations, and fairy-tale.",
    url: `/Destination/Country/Germany/Germany.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484885/Destination-Img13_fzdyyd.jpg`,
    title: "Italy",
    info: "Known for its rich history, ancient ruins, and delicious pasta and pizza.",
    url: `/Destination/Country/Italy/Italy.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484885/Destination-Img14_ak9sl4.jpg`,
    title: "Canada",
    info: "Known for its stunning natural landscapes, friendly people and cities.",
    url: `/Destination/Country/Canada/Canada.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484889/Destination-Img15_iy7hft.jpg`,
    title: "Australia",
    info: "Famous for its unique wildlife, beautiful beaches, and outdoor lifestyle.",
    url: `/Destination/Country/Australia/Australia.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484890/Destination-Img16_s4pdye.jpg`,
    title: "Brazil",
    info: "Known for its vibrant Carnival festival, soccer passion, Amazon forest.",
    url: `/Destination/Country/Brazil/Brazil.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484888/Destination-Img17_pal0nk.jpg`,
    title: "Russia",
    info: "Famous for its vast size, rich cultural heritage, iconic landmarks like Kremlin.",
    url: `/Destination/Country/Russia/Russia.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484887/Destination-Img18_wksfoc.jpg`,
    title: "Spain",
    info: "Famous for its vibrant festivals, flamenco music and dance, architecture.",
    url: `/Destination/Country/Spain/Spain.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484890/Destination-Img19_utfpwz.jpg`,
    title: "Mexico",
    info: "Known for its ancient Mayan and Aztec ruins, colorful traditions, cuisine.",
    url: `/Destination/Country/Mexico/Mexico.html`
  },
  {
    img: `https://res.cloudinary.com/djdblxcxt/image/upload/v1695484891/Destination-Img20_j1ezxm.jpg`,
    title: "New Zealand",
    info: "Famous for its stunning landscapes, adventure sports, Maori culture.",
    url: `/Destination/Country/New-Zealand/New-Zealand.html`
  }
];

destinationData.sort((a, b) => a.title.localeCompare(b.title));

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(destinationData);
    animateCardsOnLoad();
    window.addEventListener("scroll", animateCardsOnScroll);
    return () => {
      window.removeEventListener("scroll", animateCardsOnScroll);
    };
  }, []);

  const animateCardsOnLoad = () => {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 200 * index);
    });
  }

  const animateCardsOnScroll = () => {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowBottom = window.innerHeight + window.scrollY;
      if (cardTop < windowBottom) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  }

  return (
    <div>
      <div className="bg-cover bg-center pt-5" style={{height: "20rem", backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1712846214/Destinations_wb9ivu.webp')"}}>
        <div>
          <h1 className="text-start ml-16 md:ml-20 lg:ml-24 font-bold text-4xl text-gray-50">Destinations</h1>
          <div className="grid grid-cols-5 gap-1 mx-28 mt-40">
            {destinations.map((destination, index) => (
              <div key={index} className="w-60 h-70 mb-4 bg-white p-3 mr-0 rounded-lg opacity-1 transform translate-x-0 duration-800 transition-transform ease-in-out hover:shadow-lg hover:scale-100 hover:translate-y-[-5px]">
                <img src={destination.img} alt={destination.title} className="w-full h-32 object-cover rounded-md" />
                <h3 className="mt-2 text-center font-bold">{destination.title}</h3>
                <p className="mt-1">{destination.info}</p>
                <a href={destination.url} className="block mt-2 w-full bg-blue-500 text-white py-2 px-8 rounded-md text-center font-semibold hover:bg-blue-700 transition-colors duration-300">View Cities</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;