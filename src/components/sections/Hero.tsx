import { Button } from '../ui/Button';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6 text-[#141414]"
          >
            Made Fresh.<br />Served with Care.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-lg"
          >
            Hand-breaded chicken, cooked to perfection, and served with genuine hospitality. Discover why we're the favorites of millions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button size="lg">Order Now</Button>
            <Button variant="outline" size="lg">Find a Location</Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 py-6 border-t border-gray-100"
          >
            <div className="flex flex-col">
              <div className="flex text-yellow-400 mb-1 font-bold">★★★★★</div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">4.8/5 (2M+ Reviews)</span>
            </div>
            <div className="flex flex-col border-l pl-8 border-gray-100">
              <div className="font-bold text-lg leading-none mb-1">Fresh</div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Never Frozen Breast</span>
            </div>
            <div className="flex flex-col border-l pl-8 border-gray-100">
              <div className="font-bold text-lg leading-none mb-1">Peanut Oil</div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Pressure Cooked</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          <div className="absolute inset-0 z-0 opacity-100 flex items-center justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] text-red-50">
              <path fill="currentColor" d="M45.7,-77.6C58.9,-71.1,69.1,-58.5,77.4,-44.6C85.7,-30.7,92.1,-15.3,91.2,-0.5C90.3,14.3,82.1,28.6,73.1,41.4C64.1,54.2,54.3,65.6,41.9,73.1C29.5,80.6,14.7,84.1,0.5,83.3C-13.8,82.5,-27.5,77.4,-39.3,69.5C-51.1,61.6,-61,50.8,-69.5,38.6C-78.1,26.4,-85.2,13.2,-85.5,-0.2C-85.8,-13.6,-79.3,-27.2,-70.5,-38.9C-61.7,-50.6,-50.5,-60.4,-38,-67.4C-25.5,-74.5,-12.8,-78.7,1.1,-80.7C15.1,-82.6,32.5,-84.1,45.7,-77.6Z" transform="translate(100 100)" />
            </svg>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-full max-w-md aspect-square bg-[#F5F5F5] rounded-3xl shadow-inner flex items-center justify-center p-8 text-center"
          >
             <img 
               src="https://www.chick-fil-a.com/-/media/images/chick-fil-a/menu-items/chicken-sandwich-test.png" 
               alt="Signature Chicken Sandwich" 
               className="w-full h-auto drop-shadow-2xl"
             />
             <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="text-[#E51636] font-bold text-sm">Peach Milkshake</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase">Back for a limited time</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
