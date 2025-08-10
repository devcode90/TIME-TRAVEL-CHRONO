import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown, Play, Pause } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = ({ scrollY }) => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Time Machine */}
      <div className="absolute inset-0 z-10">
        <div className="w-full h-full relative">
          {!splineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <div className="text-center">
                <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-slate-400">Loading Time Machine...</p>
              </div>
            </div>
          )}
          <Spline 
            scene="https://prod.spline.design/7VkR7ZDk3IfTZmNa/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
            style={{ 
              width: '100%', 
              height: '100%',
              opacity: splineLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            TIME
            <br />
            TRAVEL
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Journey through the mysteries of temporal mechanics, explore scientific theories, 
            and discover the infinite possibilities of time manipulation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Begin Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full transition-all duration-300"
            >
              Explore Theories
            </Button>
          </motion.div>

          {/* Interactive Time Machine Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-2 cursor-pointer hover:bg-slate-700/50 transition-colors">
                <div className="w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs text-slate-400">Flux Capacitor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-2 cursor-pointer hover:bg-slate-700/50 transition-colors">
                <div className="w-6 h-6 bg-purple-400 rounded-sm rotate-45 animate-spin"></div>
              </div>
              <p className="text-xs text-slate-400">Time Coil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-2 cursor-pointer hover:bg-slate-700/50 transition-colors">
                <div className="w-8 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              </div>
              <p className="text-xs text-slate-400">Chronometer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-6 w-6 text-slate-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;