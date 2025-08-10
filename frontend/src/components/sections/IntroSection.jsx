import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Globe, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { mockData } from '../../data/mock';

const IntroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="intro" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Introduction to Time Travel
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {mockData.introduction.content}
            </p>
          </div>

          {/* Key Questions */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Clock, title: "What is Time?", description: "Explore the fundamental nature of temporal dimension" },
              { icon: Brain, title: "Human Fascination", description: "Why are we obsessed with controlling time?" },
              { icon: Globe, title: "Scientific Possibility", description: "Can physics allow time manipulation?" },
              { icon: Calendar, title: "Future Implications", description: "What would time travel mean for humanity?" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800/50 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <item.icon className="h-12 w-12 mx-auto text-blue-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                    <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Historical Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Historical Timeline of Time Travel Ideas
            </h3>
            <div className="space-y-8">
              {mockData.introduction.timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <Card className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-blue-600 text-white">
                            {event.year}
                          </Badge>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                        <CardTitle className="text-xl text-white">{event.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-950"></div>
                    {index < mockData.introduction.timeline.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 md:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;