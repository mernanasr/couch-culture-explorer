import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-indigo-100 border-4 border-indigo-300 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-indigo-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </motion.div>

        
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Discover Cultures.
          </span>{" "}
          <br className="hidden md:block" />
          Share Stories.{" "}
          <span className="text-blue-600">Stay with Locals.</span>
        </motion.h1>

        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Couch & Culture Explorer connects travelers with local hosts and unique cultural experiences around the world.
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/dashboard">
            <button className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
          </Link>
        </motion.div>

        
        <div className="mt-16 flex justify-center space-x-8 opacity-60">
          {["🏡", "🌎", "✈️", "🗺️", "🏔️", "🏖️"].map((emoji, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
