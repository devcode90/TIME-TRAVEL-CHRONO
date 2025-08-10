import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Orbit, Waves } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { mockData } from '../../data/mock';

const ScientificTheories = () => {
  const [activeTheory, setActiveTheory] = useState('relativity');

  const theories = [
    {
      id: 'relativity',
      title: 'General Relativity',
      icon: Orbit,
      color: 'from-purple-500 to-blue-500',
      data: mockData.theories.relativity
    },
    {
      id: 'dilation',
      title: 'Time Dilation',
      icon: Zap,
      color: 'from-cyan-500 to-teal-500',
      data: mockData.theories.timeDilation
    },
    {
      id: 'quantum',
      title: 'Quantum Mechanics',
      icon: Atom,
      color: 'from-pink-500 to-purple-500',
      data: mockData.theories.quantum
    }
  ];

  return (
    <section id="theories" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scientific Theories of Time Travel
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore the cutting-edge physics that might make time travel possible
            </p>
          </div>

          {/* Theory Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {theories.map((theory) => (
              <motion.button
                key={theory.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTheory(theory.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTheory === theory.id
                    ? `bg-gradient-to-r ${theory.color} text-white shadow-lg`
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <theory.icon className="h-5 w-5" />
                <span className="font-medium">{theory.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Theory Content */}
          <motion.div
            key={activeTheory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theories.map((theory) => {
              if (theory.id !== activeTheory) return null;
              
              return (
                <div key={theory.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{theory.data.title}</h3>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      {theory.data.description}
                    </p>
                    
                    <div className="space-y-4">
                      {(theory.data.details || theory.data.examples || theory.data.concepts).map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${theory.color} mt-2 flex-shrink-0`}></div>
                          <p className="text-slate-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visualization */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-r ${theory.color} p-1`}
                    >
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                        <theory.icon className="h-24 w-24 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Orbital particles */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full"
                        animate={{
                          rotate: 360,
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          rotate: { duration: 3 + i, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                        }}
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: `${60 + i * 20}px 0px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h4 className="text-2xl font-bold text-white mb-8">Explore Interactive Concepts</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Spacetime Curvature", description: "See how mass bends spacetime", icon: Waves },
                { title: "Time Dilation Calculator", description: "Calculate time effects at high speeds", icon: Zap },
                { title: "Quantum Entanglement", description: "Explore spooky action at a distance", icon: Atom }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="cursor-pointer"
                >
                  <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <item.icon className="h-12 w-12 mx-auto text-cyan-400 mb-4" />
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-center">{item.description}</p>
                      <Button 
                        variant="ghost" 
                        className="w-full mt-4 text-cyan-400 hover:text-white hover:bg-cyan-400/10"
                      >
                        Launch Simulation
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificTheories;