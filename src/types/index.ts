
// User-related types
export type UserRole = 'student' | 'staff' | 'support' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  studentId?: string;
  avatar?: string;
  created: Date;
}

// Ticket-related types
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketCategory = 
  | 'it' 
  | 'academic' 
  | 'hostel' 
  | 'finance' 
  | 'library' 
  | 'transport' 
  | 'other';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: TicketCategory;
  createdBy: string;
  assignedTo?: string;
  created: Date;
  updated: Date;
  comments: TicketComment[];
  attachments?: TicketAttachment[];
}

export interface TicketComment {
  id: string;
  ticketId: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  content: string;
  created: Date;
}

export interface TicketAttachment {
  id: string;
  ticketId: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  uploadedBy: string;
  uploaded: Date;
}

// Dashboard-related types
export interface DashboardStats {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  avgResolutionTime: string; // e.g. "2 days"
  ticketsByCategory: Record<TicketCategory, number>;
  ticketsByPriority: Record<TicketPriority, number>;
  recentTickets: Ticket[];
}
