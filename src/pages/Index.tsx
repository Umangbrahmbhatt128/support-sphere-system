
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SignInForm from '@/components/auth/SignInForm';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleSignInSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl mr-1">Support</span>
            <span className="text-gray-700 font-medium text-xl">Sphere</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Parul University
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Service Ticket Management System
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-600 mt-4 max-w-lg"
              >
                Submit and track support tickets for all your technical and administrative needs. Get faster resolutions with our streamlined support system.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
            >
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/new-ticket">
                  Submit a Ticket
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-4 text-sm text-gray-500"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Easy Ticket Submission
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real-time Updates
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 border border-gray-100"
          >
            <SignInForm onSuccess={handleSignInSuccess} />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Submit Ticket</h3>
              <p className="text-gray-600">Create a detailed ticket with all the relevant information about your issue.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600">Follow your ticket's journey through our efficient support process.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Get Resolution</h3>
              <p className="text-gray-600">Receive timely solutions and updates for your support requests.</p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-8 mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-primary font-bold text-xl mr-1">Support</span>
              <span className="text-gray-700 font-medium text-xl">Sphere</span>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2023 Parul University. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
