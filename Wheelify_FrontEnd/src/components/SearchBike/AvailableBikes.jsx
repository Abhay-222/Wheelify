import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaEdit, FaMapMarkerAlt } from 'react-icons/fa';

const AvailableBikes = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '2025-06-08',
    startTime: '12:00',
    endDate: '2025-06-09',
    endTime: '18:00',
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    console.log('Updated Search:', formData);
    setShowForm(false);
  };

  const formatDate = (dateStr) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-GB', options);
  };

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':');
    const h = parseInt(hour, 10);
    const suffix = h >= 12 ? 'pm' : 'am';
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minute} ${suffix}`;
  };

  const bikes = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      location: 'Delhi',
      price: '₹1200/day',
      image: 'https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350.jpg',
    },
    {
      id: 2,
      name: 'Bajaj Pulsar 220F',
      location: 'Delhi',
      price: '₹800/day',
      image: 'https://imgd.aeplcdn.com/393x221/bw/models/bajaj-pulsar-220.jpg',
    },
    {
      id: 3,
      name: 'Yamaha FZ-S FI',
      location: 'Delhi',
      price: '₹750/day',
      image: 'https://imgd.aeplcdn.com/393x221/bw/models/yamaha-fzs-fi.jpg',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-2">
      
      {/* Section 1 - Header */}
      <h1 className="text-3xl font-bold text-green-900 mb-6">Rent A Bike In Delhi</h1>

      {/* Section 2 - Search Summary & Modify Form */}
      <div className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="text-gray-700 text-lg flex flex-wrap items-center gap-2">
          <strong>Your search:</strong>
          <FaCalendarAlt /> {formatDate(formData.startDate)}
          <FaClock /> {formatTime(formData.startTime)}
          <span className="mx-2"> - </span>
          <FaCalendarAlt /> {formatDate(formData.endDate)}
          <FaClock /> {formatTime(formData.endTime)}
        </div>
        <button
          onClick={toggleForm}
          className="bg-orange-500 text-white px-4 py-2 mt-2 md:mt-0 rounded hover:bg-orange-600 flex items-center gap-2"
        >
          <FaEdit /> Modify
        </button>
      </div>

      {showForm && (
        <div className="mb-10 border border-gray-200 shadow-md rounded-xl p-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Modify Your Search</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Update Search
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Section 3 - Results Header & Bike List */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Found <strong>62</strong> bikes</h2>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort</label>
            <select
              id="sort"
              className="border rounded px-3 py-1.5 text-sm"
              defaultValue="relevant"
            >
              <option value="relevant">Relevant</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
            >
              <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{bike.name}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaMapMarkerAlt /> {bike.location}
                </p>
                <p className="text-green-700 font-bold mt-2">{bike.price}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableBikes;
