import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw, Infinity, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { mockData } from '../../data/mock';

const ParadoxesSection = () => {
  const [activeParadox, setActiveParadox] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const paradoxIcons = [AlertTriangle, RotateCcw, Infinity];

  return (
    <section id="paradoxes" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Paradoxes & Possibilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore the mind-bending logical puzzles that arise from time travel scenarios
            </p>
          </div>

          {/* Paradox Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mockData.paradoxes.map((paradox, index) => {
              const Icon = paradoxIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="cursor-pointer"
                  onClick={() => setActiveParadox(index)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    activeParadox === index
                      ? 'bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500 shadow-lg shadow-red-500/20'
                      : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800/50'
                  } backdrop-blur-sm`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Icon className={`h-8 w-8 ${
                          activeParadox === index ? 'text-red-400' : 'text-slate-400'
                        }`} />
                        <Badge variant={activeParadox === index ? 'destructive' : 'secondary'}>
                          Paradox #{index + 1}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-xl">{paradox.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{paradox.description}</p>
                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-sm text-slate-400 font-medium mb-2">Possible Resolution:</p>
                        <p className="text-sm text-slate-300">{paradox.resolution}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Paradox Demonstration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              Interactive Paradox Solver
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Scenario Description */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  The {mockData.paradoxes[activeParadox].name}
                </h4>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {mockData.paradoxes[activeParadox].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-300">Step 1: Time traveler goes back in time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-slate-300">Step 2: Changes historical events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300">Step 3: Creates logical inconsistency</span>
                  </div>
                </div>

                <Button 
                  onClick={triggerAnimation}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Demonstrate Paradox
                </Button>
              </div>

              {/* Visual Animation */}
              <div className="relative h-80 flex items-center justify-center">
                <motion.div className="relative">
                  {/* Timeline */}
                  <div className="absolute w-80 h-1 bg-gradient-to-r from-blue-500 to-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Past */}
                  <motion.div
                    className="absolute w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ left: 20, top: 'calc(50% - 32px)' }}
                    animate={isAnimating ? { scale: [1, 1.5, 1], rotate: 360 } : {}}
                  >
                    PAST
                  </motion.div>

                  {/* Present */}
                  <motion.div
                    className="absolute w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ right: 20, top: 'calc(50% - 32px)' }}
                    animate={isAnimating ? { scale: [1, 1.5, 1] } : {}}
                  >
                    NOW
                  </motion.div>

                  {/* Time Traveler */}
                  <motion.div
                    className="absolute w-8 h-8 bg-yellow-400 rounded-full"
                    style={{ top: 'calc(50% - 16px)' }}
                    animate={isAnimating ? {
                      x: [300, 50, 300],
                      scale: [1, 0.5, 1],
                    } : { x: 300 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Paradox Effect */}
                  {isAnimating && (
                    <motion.div
                      className="absolute inset-0 border-4 border-red-500 rounded-full"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 2 }}
                    />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Resolution Theories */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { title: "Timeline Changes", description: "The past can be altered, creating new timelines" },
                { title: "Parallel Universes", description: "Changes create branching alternate realities" },
                { title: "Self-Consistency", description: "The universe prevents paradoxes from occurring" }
              ].map((theory, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <h5 className="text-lg font-bold text-white mb-2">{theory.title}</h5>
                  <p className="text-sm text-slate-400">{theory.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParadoxesSection;