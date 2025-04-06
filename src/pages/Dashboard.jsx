import { Link } from "react-router-dom";

const Dashboard = () => {
  
  const stats = [
    { title: "Upcoming Tours", value: "12", change: "+2", isPositive: true },
    { title: "New Events", value: "8", change: "+3", isPositive: true },
    { title: "Active Hosts", value: "24", change: "-1", isPositive: false },
    { title: "Bookings Today", value: "5", change: "+1", isPositive: true }
  ];

  const recentActivities = [
    { id: 1, text: "New tour added: Pyramids of Giza", time: "2 hours ago" },
    { id: 2, text: "3 new bookings received", time: "5 hours ago" },
    { id: 3, text: "Profile updated successfully", time: "1 day ago" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <aside className="w-64 bg-indigo-700 text-white p-6 shadow-lg">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold">Explore Egypt</h2>
        </div>
        <nav className="space-y-3">
          <Link 
            to="/dashboard" 
            className="flex items-center p-3 rounded-lg bg-indigo-800 text-white font-medium"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </Link>
          <Link 
            to="/tours" 
            className="flex items-center p-3 rounded-lg hover:bg-indigo-600 text-indigo-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Town Tours
          </Link>
          <Link 
            to="/events" 
            className="flex items-center p-3 rounded-lg hover:bg-indigo-600 text-indigo-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Events
          </Link>
          <Link 
            to="/hosts" 
            className="flex items-center p-3 rounded-lg hover:bg-indigo-600 text-indigo-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Hosts
          </Link>
          <Link 
            to="/profile" 
            className="flex items-center p-3 rounded-lg hover:bg-indigo-600 text-indigo-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </Link>
        </nav>
      </aside>

      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">Welcome Back</h1>
          <p className="text-gray-600">Here's what's happening in your city today...</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <div className="flex items-end mt-2">
                <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                <span className={`ml-2 text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map(activity => (
              <li key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 h-3 w-3 mt-1.5 rounded-full bg-indigo-500"></div>
                <div className="ml-3">
                  <p className="text-gray-800">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View all activities →
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

  