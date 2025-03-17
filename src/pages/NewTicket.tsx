
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TicketForm from '@/components/tickets/TicketForm';

const NewTicket = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/tickets" className="flex items-center text-gray-500">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tickets
                </Link>
              </Button>
            </div>
            
            <TicketForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewTicket;
