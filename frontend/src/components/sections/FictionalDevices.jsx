import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { mockData } from '../../data/mock';

const FictionalDevices = () => {
  const [selectedDevice, setSelectedDevice] = useState(0);

  const deviceIcons = [Clock, Car, Sparkles];

  return (
    <section id="devices" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Fictional & Hypothetical Time Travel Devices
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From H.G. Wells to modern sci-fi, explore the most iconic time machines ever imagined
            </p>
          </div>

          {/* Device Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mockData.devices.map((device, index) => {
              const Icon = deviceIcons[index];
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDevice(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedDevice === index
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{device.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {device.year}
                  </Badge>
                </motion.button>
              );
            })}
          </div>

          {/* Device Details */}
          <motion.div
            key={selectedDevice}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Device Info */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {mockData.devices[selectedDevice].name}
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-yellow-600 text-white">
                  {mockData.devices[selectedDevice].year}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  Fictional Device
                </Badge>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {mockData.devices[selectedDevice].description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold text-white">Key Features:</h4>
                {mockData.devices[selectedDevice].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white">
                <Zap className="h-4 w-4 mr-2" />
                Activate Time Machine
              </Button>
            </div>

            {/* Device Visualization */}
            <div className="relative h-96 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: selectedDevice === 1 ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 2, repeat: Infinity }
                }}
              >
                {/* Device representation */}
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border-2 border-yellow-400/50 flex items-center justify-center backdrop-blur-sm">
                  {React.createElement(deviceIcons[selectedDevice], { 
                    className: "h-24 w-24 text-yellow-400" 
                  })}
                </div>

                {/* Energy field animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-yellow-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Particle effects */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `${80 + i * 10}px 0px`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Hypothetical Real-World Designs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Scientists' Hypothetical Designs
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alcubierre Drive",
                  scientist: "Miguel Alcubierre",
                  description: "Contracts spacetime in front, expands behind",
                  feasibility: "Requires exotic matter"
                },
                {
                  name: "Traversable Wormhole",
                  scientist: "Kip Thorne",
                  description: "Stable Einstein-Rosen bridge",
                  feasibility: "Needs negative energy"
                },
                {
                  name: "Rotating Cylinder",
                  scientist: "Frank Tipler",
                  description: "Infinite rotating cylinder creates CTCs",
                  feasibility: "Requires infinite cylinder"
                },
                {
                  name: "Quantum Tunneling",
                  scientist: "Various",
                  description: "Quantum effects allowing temporal movement",
                  feasibility: "Under research"
                }
              ].map((design, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                >
                  <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{design.name}</CardTitle>
                      <CardDescription className="text-yellow-400">
                        by {design.scientist}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm mb-4">{design.description}</p>
                      <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">
                        <strong>Feasibility:</strong> {design.feasibility}
                      </div>
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

export default FictionalDevices;