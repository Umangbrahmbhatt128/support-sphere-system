
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Filter, 
  Search,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TicketTable from '@/components/dashboard/TicketTable';
import { 
  mockTickets, 
  getStatusDisplayText, 
  getCategoryDisplayText, 
  getPriorityDisplayText 
} from '@/utils/mock-data';
import { TicketStatus, TicketCategory, TicketPriority } from '@/types';

const Tickets = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<TicketStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<TicketCategory | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<TicketPriority | 'all'>('all');

  const handleClearFilters = () => {
    setSearch('');
    setStatusFilter('all');
    setCategoryFilter('all');
    setPriorityFilter('all');
  };

  // Apply filters
  const filteredTickets = mockTickets.filter(ticket => {
    // Search filter
    if (search && !ticket.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    // Status filter
    if (statusFilter !== 'all' && ticket.status !== statusFilter) {
      return false;
    }
    
    // Category filter
    if (categoryFilter !== 'all' && ticket.category !== categoryFilter) {
      return false;
    }
    
    // Priority filter
    if (priorityFilter !== 'all' && ticket.priority !== priorityFilter) {
      return false;
    }
    
    return true;
  });

  // Sort by most recent first
  const sortedTickets = [...filteredTickets].sort(
    (a, b) => b.created.getTime() - a.created.getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
                <p className="text-gray-500 mt-1">
                  Manage and track all your support tickets
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

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search tickets..."
                        className="pl-8"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Select
                      value={statusFilter}
                      onValueChange={(value) => setStatusFilter(value as TicketStatus | 'all')}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Status: All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select
                      value={categoryFilter}
                      onValueChange={(value) => setCategoryFilter(value as TicketCategory | 'all')}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Category: All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="it">IT Support</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="hostel">Hostel</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="library">Library</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select
                      value={priorityFilter}
                      onValueChange={(value) => setPriorityFilter(value as TicketPriority | 'all')}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Priority: All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Priorities</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active filters */}
                {(search || statusFilter !== 'all' || categoryFilter !== 'all' || priorityFilter !== 'all') && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {search && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Search: {search}
                        <button onClick={() => setSearch('')}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {statusFilter !== 'all' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Status: {getStatusDisplayText(statusFilter as TicketStatus)}
                        <button onClick={() => setStatusFilter('all')}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {categoryFilter !== 'all' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Category: {getCategoryDisplayText(categoryFilter as TicketCategory)}
                        <button onClick={() => setCategoryFilter('all')}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {priorityFilter !== 'all' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Priority: {getPriorityDisplayText(priorityFilter as TicketPriority)}
                        <button onClick={() => setPriorityFilter('all')}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleClearFilters}
                      className="ml-2"
                    >
                      Clear all
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <TicketTable 
              tickets={sortedTickets} 
              title={`All Tickets (${sortedTickets.length})`}
              showViewAll={false} 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tickets;
