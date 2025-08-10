import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Clock, Zap, Atom, BookOpen, Users, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import ScientificTheories from './sections/ScientificTheories';
import ParadoxesSection from './sections/ParadoxesSection';
import FictionalDevices from './sections/FictionalDevices';
import LatestResearch from './sections/LatestResearch';
import CommunitySection from './sections/CommunitySection';
import Navigation from './Navigation';

const TimeTravel = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
        {Array.from({length: 100}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <IntroSection />
        <ScientificTheories />
        <ParadoxesSection />
        <FictionalDevices />
        <LatestResearch />
        <CommunitySection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey Through Time
            </h3>
            <p className="text-slate-400 mb-4">
              Exploring the mysteries of temporal mechanics and the possibilities of tomorrow
            </p>
            <p className="text-sm text-slate-500">
              © 2025 Time Travel Hub. All rights reserved across all timelines.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimeTravel;