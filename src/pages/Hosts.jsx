const hosts = [
    {
      name: "Merna",
      photo: "https://i.pinimg.com/236x/66/88/c5/6688c5f3cca119be389fd362084408db.jpg",
      price: "$25/night",
      isGuide: true,
      reviews: ["Amazing stay!", "She was super helpful and friendly!"],
      languages: ["English", "Arabic"],
      rating: 4.5
    },
    {
      name: "Ahmed",
      photo: "https://i.pinimg.com/474x/81/ed/2b/81ed2b4b22bb5a7886acb959f0a00e67.jpg",
      price: "$30/night",
      isGuide: false,
      reviews: ["Very cozy place", "Loved the decor and vibe."],
      languages: ["Arabic"],
      rating: 4.8
    }
  ];
  
  const Hosts = () => {
    const handleReservation = (hostName) => {
    
      alert(`Reservation request sent to ${hostName}! They will contact you shortly.`);
    };
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Meet Our Hosts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hosts.map((host, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={host.photo} 
                  alt={host.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{host.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white">{host.rating}</span>
                  </div>
                </div>
              </div>
  
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{host.price}</p>
                    <p className="text-sm text-gray-600">
                      Tour Guide: <span className={host.isGuide ? "text-green-600 font-medium" : "text-gray-500"}>{host.isGuide ? "Available" : "Not available"}</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Languages: {host.languages.join(", ")}
                    </p>
                  </div>
                </div>
  
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Reviews:</h4>
                  <ul className="space-y-2">
                    {host.reviews.map((review, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 text-yellow-400 mt-0.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-700">{review}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                
                <button
                  onClick={() => handleReservation(host.name)}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Hosts;
  

  