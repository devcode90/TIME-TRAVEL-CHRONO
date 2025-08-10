import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, BookOpen, Trophy, Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { mockData } from '../../data/mock';

const CommunitySection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState('');

  return (
    <section id="community" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Community & Learning
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join fellow time travel enthusiasts, test your knowledge, and expand your understanding
            </p>
          </div>

          <Tabs defaultValue="quiz" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-slate-800 rounded-full">
              <TabsTrigger value="quiz" className="rounded-full">Quiz</TabsTrigger>
              <TabsTrigger value="discussions" className="rounded-full">Discussions</TabsTrigger>
              <TabsTrigger value="reading" className="rounded-full">Reading List</TabsTrigger>
              <TabsTrigger value="facts" className="rounded-full">Fun Facts</TabsTrigger>
            </TabsList>

            {/* Interactive Quiz */}
            <TabsContent value="quiz">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <div className="text-center mb-8">
                  <Trophy className="h-16 w-16 mx-auto text-yellow-400 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Time Travel Personality Quiz
                  </h3>
                  <p className="text-slate-300">
                    {mockData.community.quizzes[selectedQuiz].question}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {mockData.community.quizzes[selectedQuiz].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setQuizAnswer(option)}
                      className={`p-6 rounded-lg text-left transition-all duration-300 ${
                        quizAnswer === option
                          ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          quizAnswer === option 
                            ? 'bg-white border-white' 
                            : 'border-slate-400'
                        }`}></div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {quizAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-8 py-3">
                      Get My Time Travel Personality
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>

            {/* Discussion Forum */}
            <TabsContent value="discussions">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white">Active Discussions</h3>
                  <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Discussion
                  </Button>
                </div>

                {mockData.community.discussions.map((discussion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-white text-xl mb-2">
                              {discussion.title}
                            </CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <span>Last active: {discussion.lastActive}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-violet-500 text-violet-400">
                              Hot
                            </Badge>
                            <ThumbsUp className="h-5 w-5 text-slate-400" />
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}

                <div className="text-center mt-8">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Load More Discussions
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            {/* Reading List */}
            <TabsContent value="reading">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <BookOpen className="h-8 w-8 mr-3 text-pink-400" />
                    Recommended Books
                  </h3>
                  <div className="space-y-4">
                    {mockData.community.books.map((book, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-16 bg-gradient-to-br from-pink-500 to-violet-500 rounded flex-shrink-0 flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-bold">{book}</h4>
                                <div className="flex items-center space-x-2 mt-2">
                                  {Array.from({length: 5}).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                  <span className="text-slate-400 text-sm ml-2">(4.8/5)</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Learning Resources
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: "Video Lectures", description: "MIT Physics courses on spacetime", type: "video" },
                      { title: "Interactive Simulations", description: "Explore relativistic effects", type: "interactive" },
                      { title: "Research Papers", description: "Latest peer-reviewed studies", type: "document" },
                      { title: "Documentaries", description: "Science Channel time travel series", type: "video" }
                    ].map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                          <CardContent className="p-6">
                            <h4 className="text-white font-bold mb-2">{resource.title}</h4>
                            <p className="text-slate-300 mb-4">{resource.description}</p>
                            <Badge variant="secondary" className="bg-pink-600/20 text-pink-400">
                              {resource.type}
                            </Badge>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Fun Facts */}
            <TabsContent value="facts">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    fact: "GPS satellites experience time 38 microseconds faster per day due to weaker gravity",
                    category: "Real Science"
                  },
                  {
                    fact: "If you traveled at 99.9% the speed of light for 1 year, 22 years would pass on Earth",
                    category: "Time Dilation"
                  },
                  {
                    fact: "Stephen Hawking threw a party for time travelers - but only sent invitations after the party",
                    category: "Physics Humor"
                  },
                  {
                    fact: "Black holes can slow time so much that events at the edge appear frozen to outside observers",
                    category: "Gravitational Effects"
                  },
                  {
                    fact: "Quantum particles can tunnel through barriers instantly, seeming to teleport",
                    category: "Quantum Mechanics"
                  },
                  {
                    fact: "The 'grandfather paradox' was first described by science fiction writer René Barjavel in 1943",
                    category: "Historical"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 h-full">
                      <CardHeader>
                        <Badge variant="outline" className="border-pink-500 text-pink-400 w-fit">
                          {item.category}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 leading-relaxed">{item.fact}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: "15,432", label: "Active Members", icon: Users },
              { number: "2,847", label: "Discussions", icon: MessageCircle },
              { number: "156", label: "Research Papers", icon: BookOpen },
              { number: "89%", label: "Quiz Completion", icon: Trophy }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 mx-auto text-pink-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <p className="text-slate-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;