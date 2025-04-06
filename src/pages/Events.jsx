import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function EventsPage() {
  const events = [
    {
      title: 'Cairo Music Festival',
      date: '2025-05-10',
      location: 'Cairo Opera House',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nEwwZLUtQR0aVCxQ6tNM1MW9uSsrkgYKmA&s',
      lat: 30.0444,
      lng: 31.2357,
    },
    {
      title: 'Art Meetup',
      date: '2025-05-12',
      location: 'Downtown Cairo',
      photo: 'https://i.pinimg.com/474x/3f/71/74/3f717497eb14166b343262633dbaa139.jpg',
      lat: 30.0500,
      lng: 31.2333,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 p-6 space-y-6 overflow-y-scroll">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        {events.map((event, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg space-y-2">
            <img src={event.photo} alt={event.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date} - {event.location}</p>
            <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded">Reserve</button>
          </div>
        ))}
      </div>

      <div className="md:w-1/2 h-[500px] p-6">
        <MapContainer center={[30.0444, 31.2357]} zoom={12} className="h-full w-full rounded-xl shadow-lg">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {events.map((event, index) => (
            <Marker key={index} position={[event.lat, event.lng]}>
              <Popup>
                <strong>{event.title}</strong><br />{event.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
