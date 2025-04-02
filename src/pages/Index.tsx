
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import { ArrowRight, Brain, Code, Database, Cloud } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl mr-1">Pragnya</span>
            <span className="text-purple-600 font-medium text-xl">Tech</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="#services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link to="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.section 
          className="py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Intelligent Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Businesses with <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">AI</span> and Software Solutions
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                PragnyaTech delivers cutting-edge AI-driven software development, cloud solutions, and data engineering services to help your business innovate and scale.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  Get a Quote
                </Button>
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    <div className="bg-white rounded-xl shadow-md p-6 animate-float">
                      <Brain className="h-8 w-8 text-primary mb-3" />
                      <h3 className="text-lg font-semibold">AI Solutions</h3>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 animate-float" style={{ animationDelay: "0.5s" }}>
                      <Code className="h-8 w-8 text-purple-600 mb-3" />
                      <h3 className="text-lg font-semibold">Custom Software</h3>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 animate-float" style={{ animationDelay: "0.7s" }}>
                      <Database className="h-8 w-8 text-blue-500 mb-3" />
                      <h3 className="text-lg font-semibold">Data Engineering</h3>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 animate-float" style={{ animationDelay: "0.9s" }}>
                      <Cloud className="h-8 w-8 text-sky-500 mb-3" />
                      <h3 className="text-lg font-semibold">Cloud Services</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From AI-powered applications to cloud infrastructure, we provide end-to-end technology solutions to address your business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CardHoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI & Data Solutions</h3>
                <p className="text-gray-600 flex-grow">
                  Leverage machine learning and data analytics to extract valuable insights and automate processes.
                </p>
                <Link to="#" className="flex items-center mt-4 text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardHoverEffect>
            
            <CardHoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center text-purple-600">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Software Development</h3>
                <p className="text-gray-600 flex-grow">
                  Custom software solutions designed to solve specific business challenges and enhance productivity.
                </p>
                <Link to="#" className="flex items-center mt-4 text-purple-600 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardHoverEffect>
            
            <CardHoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                    <Database className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
                <p className="text-gray-600 flex-grow">
                  Build robust data pipelines and infrastructure to organize, process, and analyze your business data.
                </p>
                <Link to="#" className="flex items-center mt-4 text-blue-500 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardHoverEffect>
            
            <CardHoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-500">
                    <Cloud className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
                <p className="text-gray-600 flex-grow">
                  Cloud-native development and DevOps practices to ensure scalable, reliable, and secure applications.
                </p>
                <Link to="#" className="flex items-center mt-4 text-sky-500 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardHoverEffect>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-gray-600 max-w-lg">
                Connect with our team of experts to discover how PragnyaTech can help you leverage the latest technology innovations for business growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Email</span>
                  <a href="mailto:info@pragnyatech.com" className="text-gray-900 font-medium">info@pragnyatech.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Phone</span>
                  <a href="tel:+91-8877665544" className="text-gray-900 font-medium">+91-887-766-5544</a>
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <span className="text-sm text-gray-500 mb-1">Location</span>
                  <p className="text-gray-900 font-medium">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button size="lg">Schedule a Consultation</Button>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl mr-1">Pragnya</span>
                <span className="text-purple-400 font-medium text-xl">Tech</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Empowering businesses with intelligent software solutions and AI-driven innovations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 PragnyaTech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
