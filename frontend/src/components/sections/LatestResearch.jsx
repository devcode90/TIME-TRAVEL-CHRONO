import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, TrendingUp, Beaker } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { mockData } from '../../data/mock';

const LatestResearch = () => {
  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Latest Research & Discoveries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with cutting-edge physics research and breakthroughs in temporal mechanics
            </p>
          </div>

          {/* Research Papers */}
          <div className="space-y-8 mb-16">
            {mockData.research.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge className="bg-green-600 text-white flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{paper.date}</span>
                          </Badge>
                          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Breakthrough
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-white mb-2">{paper.title}</CardTitle>
                      </div>
                      <Beaker className="h-8 w-8 text-cyan-400 flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">{paper.summary}</p>
                    
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-cyan-400 mb-1">Significance:</p>
                          <p className="text-sm text-slate-300">{paper.significance}</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Paper
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Research Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Quantum Physics",
                description: "Exploring quantum tunneling and retrocausality",
                papers: 24,
                trend: "+12% this month"
              },
              {
                title: "General Relativity",
                description: "Wormhole stability and spacetime curvature",
                papers: 18,
                trend: "+8% this month"
              },
              {
                title: "Theoretical Physics", 
                description: "Mathematical models of time travel",
                papers: 31,
                trend: "+15% this month"
              },
              {
                title: "Experimental Physics",
                description: "Laboratory tests of temporal effects",
                papers: 12,
                trend: "+5% this month"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-cyan-400">
                        {category.papers}
                      </div>
                      <p className="text-sm text-slate-500">active papers</p>
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 text-xs">
                        {category.trend}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Research Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Future Research Milestones
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-green-500"></div>
              
              {[
                { year: "2025", milestone: "Quantum time reversal experiments", status: "in progress" },
                { year: "2027", milestone: "Wormhole simulation breakthrough", status: "planned" },
                { year: "2030", milestone: "Microscopic temporal displacement", status: "theoretical" },
                { year: "2035", milestone: "Macroscopic time effects", status: "speculative" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? '' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-950 z-10"></div>
                  <div className="flex-1 px-8">
                    <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-cyan-600">{item.year}</Badge>
                          <Badge variant="outline" className={`
                            ${item.status === 'in progress' ? 'border-green-500 text-green-400' : ''}
                            ${item.status === 'planned' ? 'border-yellow-500 text-yellow-400' : ''}
                            ${item.status === 'theoretical' ? 'border-blue-500 text-blue-400' : ''}
                            ${item.status === 'speculative' ? 'border-purple-500 text-purple-400' : ''}
                          `}>
                            {item.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-lg">{item.milestone}</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestResearch;