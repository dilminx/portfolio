import React from 'react';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="m-4">
      <a
        href={link}
        className="block max-w-sm overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm font-medium">{subtitle}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
