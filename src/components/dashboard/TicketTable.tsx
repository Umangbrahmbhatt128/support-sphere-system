
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  XCircle,
  Timer
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Ticket, TicketStatus } from '@/types';
import { 
  getStatusDisplayText, 
  getCategoryDisplayText, 
  getPriorityDisplayText 
} from '@/utils/mock-data';

interface TicketTableProps {
  tickets: Ticket[];
  title?: string;
  showViewAll?: boolean;
}

const TicketTable = ({ 
  tickets, 
  title = "Recent Tickets",
  showViewAll = true 
}: TicketTableProps) => {
  const getStatusIcon = (status: TicketStatus) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="h-4 w-4 text-status-open" />;
      case 'in-progress':
        return <Timer className="h-4 w-4 text-status-in-progress" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-status-resolved" />;
      case 'closed':
        return <XCircle className="h-4 w-4 text-status-closed" />;
      default:
        return null;
    }
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 60000);
    const diffHours = Math.round(diffMs / 3600000);
    const diffDays = Math.round(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} min${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {showViewAll && (
          <Link to="/tickets">
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No tickets found.
                </TableCell>
              </TableRow>
            ) : (
              tickets.map((ticket) => (
                <TableRow key={ticket.id} className="group">
                  <TableCell className="font-mono text-xs">{ticket.id}</TableCell>
                  <TableCell className="font-medium max-w-[250px] truncate">
                    {ticket.title}
                  </TableCell>
                  <TableCell>{getCategoryDisplayText(ticket.category)}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                      ticket.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {getPriorityDisplayText(ticket.priority)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getStatusIcon(ticket.status)}
                      <span className="ml-1.5 text-sm">{getStatusDisplayText(ticket.status)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {getTimeAgo(ticket.created)}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/tickets/${ticket.id}`}>
                      <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TicketTable;
