import React from 'react';

const tours = [  
  {
    place: 'Abu Simbel Temples',
    guide: 'Mahmoud Saber',
    price: '$40',
    description: 'Explore the majestic temples of Ramses II and Nefertari carved into rock.',
    image: 'https://media.istockphoto.com/id/1305921584/photo/woman-walking-inside-abu-simbel-temples.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cz7fbrp0nnndmvjVv7bceZzlB_VUxfSWhvDqGlIp8ts='
  },
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
  {
    place: 'Islamic Cairo',
    guide: 'Ahmed El-Naggar',
    price: '$20',
    description: 'Discover mosques, minarets, and medieval streets in the heart of Islamic Cairo.',
    image: 'https://plus.unsplash.com/premium_photo-1697729777503-5a6ff8d6d877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXNsYW1pYyUyMGNhaXJvfGVufDB8fDB8fHww'
  },
  {
    place: 'Coptic Cairo',
    guide: 'Nora Botros',
    price: '$22',
    description: 'Walk through ancient churches and religious landmarks of Coptic heritage.',
    image: 'https://images.unsplash.com/photo-1680053550458-d048bbf8619b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wdGljJTIwY2Fpcm98ZW58MHx8MHx8fDA%3D'
  },
  {
    place: 'Grand Egyptian Museum',
    guide: 'Kareem Soliman',
    price: '$35',
    description: 'An exclusive journey into Egypt’s newest and largest museum of ancient wonders.',
    image: 'https://images.adsttc.com/media/images/63f6/8bc6/2b86/6c2e/2667/6bfe/large_jpg/the-grand-egyptian-museum-designed-by-heneghan-peng-architects-is-officially-open-to-the-public_2.jpg?1677102040'
  },
  {
    place: 'Pyramids of Giza',
    guide: 'Layla Hassan',
    price: '$28',
    description: 'Stand in awe before the Great Pyramid and the mighty Sphinx with expert narration.',
    image: 'https://media.istockphoto.com/id/1802385858/photo/the-sphinx-next-to-the-pyramids-in-the-sands-of-giza-desert-egypt.webp?a=1&b=1&s=612x612&w=0&k=20&c=vKUn0W0qMPjSjw5EU_89oz6xKHB8b-0MCezvmbanFBc='
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

