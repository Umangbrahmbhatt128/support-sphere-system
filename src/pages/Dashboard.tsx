
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TicketIcon, 
  Clock, 
  CheckCircle, 
  PlusCircle,
  BarChart3,
  Users,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import StatCard from '@/components/dashboard/StatCard';
import TicketTable from '@/components/dashboard/TicketTable';
import { mockDashboardStats, mockTickets, getCurrentUser } from '@/utils/mock-data';

const Dashboard = () => {
  const currentUser = getCurrentUser();
  const userTickets = mockTickets.filter(ticket => ticket.createdBy === currentUser.id);
  const recentTickets = userTickets.sort((a, b) => b.created.getTime() - a.created.getTime()).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">
                  Welcome back, {currentUser.name}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild>
                  <Link to="/new-ticket">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Ticket
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Tickets"
                value={userTickets.length}
                icon={TicketIcon}
                description="All tickets you've created"
              />
              <StatCard
                title="Open Tickets"
                value={userTickets.filter(t => t.status === 'open').length}
                icon={AlertCircle}
                change={15}
                changeDirection="up"
                iconClassName="bg-blue-100"
              />
              <StatCard
                title="In Progress"
                value={userTickets.filter(t => t.status === 'in-progress').length}
                icon={Clock}
                iconClassName="bg-yellow-100"
              />
              <StatCard
                title="Resolved"
                value={userTickets.filter(t => t.status === 'resolved' || t.status === 'closed').length}
                icon={CheckCircle}
                change={8}
                changeDirection="up"
                iconClassName="bg-green-100"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Ticket Activity</CardTitle>
                  <CardDescription>Overview of your recent tickets</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* This would be a chart in a real application */}
                  <div className="h-64 w-full bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-300 mb-2 mx-auto" />
                      <p className="text-gray-500">Activity chart coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tickets by Category</CardTitle>
                  <CardDescription>Distribution of your tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* This would be a chart in a real application */}
                  <div className="h-64 w-full bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <PlusCircle className="h-12 w-12 text-gray-300 mb-2 mx-auto" />
                      <p className="text-gray-500">Category chart coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <TicketTable tickets={recentTickets} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
