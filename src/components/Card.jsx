import React from 'react';

const Card = ({ title, bgImage, children }) => (
  <div className="bg-white animated fadeIn slow">
    <div className="relative">
      <img className="w-full object-fill h-56" src={bgImage} alt={title} />
      <div className="card-title absolute bottom-0 left-0 uppercase text-sm bg-orange-400 text-white text-center py-4 px-20">{title}</div>
    </div>
    <div className="text-center py-4 h-64 flex items-center flex-col justify-center">
      {children}
    </div>
  </div>
)

export default Card
