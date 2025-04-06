import React from 'react';

const tours = [  
  {
    place: 'Luxor Temple',
    guide: 'Youssef Mostafa',
    price: '$25',
    description: 'A magical tour through the ancient Luxor Temple with a local expert.',
    image: 'https://images.unsplash.com/photo-1689876405589-666038511bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eG9yJTIwdGVtcGxlfGVufDB8fDB8fHww'
  },
  {
    place: 'Hatshepsut Temple',
    guide: 'Mona Khaled',
    price: '$30',
    description: 'Explore the life of the powerful queen in the Valley of the Kings.',
    image: 'https://plus.unsplash.com/premium_photo-1661962355663-2a435ccf844d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF0c2hlcHN1dCUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  
];

export default function TownTours() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Town Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tours.map((tour, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            
            <div className="h-48 overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.place}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{tour.place}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Guide:</span> {tour.guide}
              </p>
              <p className="text-gray-700 mb-4">{tour.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{tour.price}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

