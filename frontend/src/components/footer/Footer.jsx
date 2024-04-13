import React from 'react';

const FooterArticle = ({ heading, links }) => (
  <article>
    <h5 className='font-bold text-gray-600 text-sm'>{heading}</h5>
    {links.map(({ label, url }, index) => (
      <p className='pt-2 hover:text-blue-600 hover:underline' key={index}><a href={url}>{label}</a></p>
    ))}
  </article>
);

const Socials = () => {
  const socialLinks = [
    { title: "Facebook", url: "https://res.cloudinary.com/djdblxcxt/image/upload/v1695484891/Facebook-Logo_eehvjt.png" },
    { title: "Instagram", url: "https://res.cloudinary.com/djdblxcxt/image/upload/v1695484915/Instagram-Logo_j063g8.png" },
    { title: "Twitter", url: "https://res.cloudinary.com/djdblxcxt/image/upload/v1695484944/Twitter-Logo_z4i2si.png" },
  ];

  return (
    <div className="flex gap-36 -mt-1 text-sm">
      <div>
        <h5 className='font-bold text-gray-600 text-sm'>SOCIAL LINKS</h5>
        <div className='flex gap-4 mt-4'>
          {socialLinks.map(({ title, url }, index) => (
            <abbr key={index} title={title}>
              <a href={url}>
                <img src={url} alt={`${title}-Img`} className='w-8' />
              </a>
            </abbr>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  // Define the data for each footer section
  const sections = [
    {
      heading: "ABOUT US",
      links: [
        { label: "About Blue Wing Airlines", url: "/Travel/Baggage/Baggage.html" },
        { label: "Corporate Information", url: "/Travel/Airport/Info.html" },
        { label: "Press", url: "/Travel/Kids/Infant.html" },
        { label: "Cargo Operations", url: "/Travel/Documents/Visa.html" }
      ]
    },
    {
      heading: "BOOK & MANAGE",
      links: [
        { label: "Search Flights", url: "/Travel/Baggage/Baggage.html" },
        { label: "Manage Bookings", url: "/Travel/Airport/Info.html" },
        { label: "Flight Schedule", url: "/Travel/Kids/Infant.html" }
      ]
    },
    {
      heading: "WHERE WE FLY",
      links: [
        { label: "Nonstop Flights", url: "/Travel/Nonstop.html" },
        { label: "Popular Flights", url: "/Travel/Popular.html" }
      ]
    },
    {
      heading: "PREPARE TO TRAVEL BAGGAGE",
      links: [
        { label: "Baggage", url: "/Travel/Baggage.html" },
        { label: "Airport Information", url: "/Travel/Airport/Info.html" },
        { label: "Travel with Children, Pets", url: "/Travel/Kids-Pets.html" },
        { label: "Visas & Documents", url: "/Travel/Visas.html" },
        { label: "Health & Medical Assistance", url: "/Travel/Medical-Assistance.html" }
      ]
    },
    {
      links: [
        { label: "Sitemap", url: "" },
        { label: "Terms & Conditions", url: "" },
        { label: "Privacy Policy", url: "" }
      ]
    },
    {
      links: [
        { label: "Cookie Policy", url: "" },
        { label: "Conditions of Carriage", url: "" },
        { label: "Domestic Fares", url: "" }
      ]
    },
    {
      links: [
        { label: "Travel Agents", url: "" },
        { label: "GST", url: "" },
        { label: "Passenger Charter", url: "" }
      ]
    },
    {
      heading: "BLUE WING EXPERIENCE",
      links: [
        { label: "At The Airport", url: "/Experience/At-Airport/Information.html" },
        { label: "In The Air", url: "/Experience/In-Air/Air.html" },
        { label: "Our Fleet", url: "/Experience/Our-Fleets/Fleet.html" }
      ]
    },
    {
      heading: "SUPPORT",
      links: [
        { label: "Contact", url: "/Support/Help.html" },
        { label: "FAQs", url: "/Support/FAQ/Query.html" },
        { label: "Grievance Resolution", url: "/Support/Grievances/Complaint.html" }
      ]
    },
    {
      heading: "AIR INDIA APP",
      links: [
        { label: "Book and Manage your flights on the go", url: "/AirIndiaApp.html" }
      ]
    }
  ];

  return (
    <div className='bg-gray-200 mt-12'>
      <footer className="grid grid-cols-4 gap-x-28 gap-y-6 px-16 py-6 text-sm">
        {sections.map(({ heading, links }, index) => (
          <FooterArticle key={index} heading={heading} links={links} />
        ))}
        <Socials />
      </footer>
      <div className="text-center p-3 -mt-2">
        <p>Copyright © 2023 Blue Wing Ltd</p>
        <p>All rights reserved. Use of this website indicates your compliance with our Privacy Policy, Conditions of Carriage, Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default Footer;