
import { 
  User, 
  UserRole, 
  Ticket, 
  TicketStatus, 
  TicketPriority, 
  TicketCategory,
  TicketComment,
  DashboardStats
} from "@/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Raj Patel",
    email: "raj.patel@paruluniversity.ac.in",
    role: "student",
    studentId: "PU2022CS001",
    avatar: "https://source.unsplash.com/collection/9642989/200x200?1",
    created: new Date("2022-06-01")
  },
  {
    id: "u2",
    name: "Priya Sharma",
    email: "priya.sharma@paruluniversity.ac.in",
    role: "student",
    studentId: "PU2021ME045",
    avatar: "https://source.unsplash.com/collection/9642989/200x200?2",
    created: new Date("2021-07-15")
  },
  {
    id: "u3",
    name: "Dr. Anand Verma",
    email: "anand.verma@paruluniversity.ac.in",
    role: "staff",
    department: "Computer Science",
    avatar: "https://source.unsplash.com/collection/9642989/200x200?3",
    created: new Date("2019-03-10")
  },
  {
    id: "u4",
    name: "Nikhil Joshi",
    email: "nikhil.joshi@paruluniversity.ac.in",
    role: "support",
    department: "IT Support",
    avatar: "https://source.unsplash.com/collection/9642989/200x200?4",
    created: new Date("2020-01-05")
  },
  {
    id: "u5",
    name: "Meera Desai",
    email: "meera.desai@paruluniversity.ac.in",
    role: "admin",
    department: "Administration",
    avatar: "https://source.unsplash.com/collection/9642989/200x200?5",
    created: new Date("2018-11-20")
  }
];

// Mock Ticket Comments
export const mockComments: TicketComment[] = [
  {
    id: "c1",
    ticketId: "t1",
    userId: "u4",
    userName: "Nikhil Joshi",
    userRole: "support",
    content: "I've checked this issue and will be working on it today. Could you please provide your laptop model?",
    created: new Date("2023-09-20T10:30:00")
  },
  {
    id: "c2",
    ticketId: "t1",
    userId: "u1",
    userName: "Raj Patel",
    userRole: "student",
    content: "Thanks for the quick response. It's a Dell XPS 13 (2022 model).",
    created: new Date("2023-09-20T11:15:00")
  },
  {
    id: "c3",
    ticketId: "t2",
    userId: "u4",
    userName: "Nikhil Joshi",
    userRole: "support",
    content: "We're looking into the WiFi issues in Hostel Block C. An engineer will visit tomorrow.",
    created: new Date("2023-09-15T14:20:00")
  },
  {
    id: "c4",
    ticketId: "t3",
    userId: "u5",
    userName: "Meera Desai",
    userRole: "admin",
    content: "Your request has been forwarded to the Finance department for processing.",
    created: new Date("2023-09-18T09:45:00")
  }
];

// Mock Tickets
export const mockTickets: Ticket[] = [
  {
    id: "t1",
    title: "Unable to access university portal",
    description: "I'm trying to login to the university portal but getting an error saying 'Invalid credentials' even though I'm sure my password is correct.",
    status: "in-progress",
    priority: "high",
    category: "it",
    createdBy: "u1",
    assignedTo: "u4",
    created: new Date("2023-09-20T09:15:00"),
    updated: new Date("2023-09-20T10:30:00"),
    comments: mockComments.filter(c => c.ticketId === "t1")
  },
  {
    id: "t2",
    title: "WiFi not working in Hostel Block C",
    description: "The WiFi in Hostel Block C, 3rd floor has not been working since yesterday evening. Multiple students are affected.",
    status: "open",
    priority: "urgent",
    category: "hostel",
    createdBy: "u2",
    created: new Date("2023-09-15T08:30:00"),
    updated: new Date("2023-09-15T14:20:00"),
    comments: mockComments.filter(c => c.ticketId === "t2")
  },
  {
    id: "t3",
    title: "Scholarship disbursement query",
    description: "I was approved for the merit scholarship last semester, but haven't received the funds in my account yet. Could someone please check the status?",
    status: "open",
    priority: "medium",
    category: "finance",
    createdBy: "u1",
    created: new Date("2023-09-18T09:00:00"),
    updated: new Date("2023-09-18T09:45:00"),
    comments: mockComments.filter(c => c.ticketId === "t3")
  },
  {
    id: "t4",
    title: "Request for lab equipment",
    description: "For our final year project in robotics, we need access to the Arduino kits and sensors. Requesting permission to use them after class hours.",
    status: "resolved",
    priority: "low",
    category: "academic",
    createdBy: "u2",
    assignedTo: "u3",
    created: new Date("2023-09-10T11:30:00"),
    updated: new Date("2023-09-12T15:45:00"),
    comments: []
  },
  {
    id: "t5",
    title: "Lost library card",
    description: "I've lost my library card and need a replacement. How can I get a new one?",
    status: "closed",
    priority: "low",
    category: "library",
    createdBy: "u1",
    created: new Date("2023-09-05T14:20:00"),
    updated: new Date("2023-09-07T10:15:00"),
    comments: []
  },
  {
    id: "t6",
    title: "AC not working in Lecture Hall 302",
    description: "The air conditioning in Lecture Hall 302 hasn't been working properly for the past week. It's becoming difficult to focus during lectures.",
    status: "in-progress",
    priority: "medium",
    category: "other",
    createdBy: "u3",
    assignedTo: "u4",
    created: new Date("2023-09-14T09:30:00"),
    updated: new Date("2023-09-14T11:45:00"),
    comments: []
  },
  {
    id: "t7",
    title: "Shuttle bus schedule confusion",
    description: "There seems to be a discrepancy between the posted shuttle schedule and the actual timings. The 4:30pm shuttle hasn't been arriving on time.",
    status: "open",
    priority: "medium",
    category: "transport",
    createdBy: "u2",
    created: new Date("2023-09-19T16:45:00"),
    updated: new Date("2023-09-19T16:45:00"),
    comments: []
  },
  {
    id: "t8",
    title: "Unable to submit assignment online",
    description: "I'm trying to submit my Economics assignment on the portal but the submission link appears to be broken. The deadline is tomorrow.",
    status: "resolved",
    priority: "high",
    category: "academic",
    createdBy: "u1",
    assignedTo: "u4",
    created: new Date("2023-09-17T22:30:00"),
    updated: new Date("2023-09-18T09:15:00"),
    comments: []
  }
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalTickets: mockTickets.length,
  openTickets: mockTickets.filter(t => t.status === "open").length,
  resolvedTickets: mockTickets.filter(t => t.status === "resolved" || t.status === "closed").length,
  avgResolutionTime: "1.5 days",
  ticketsByCategory: {
    it: mockTickets.filter(t => t.category === "it").length,
    academic: mockTickets.filter(t => t.category === "academic").length,
    hostel: mockTickets.filter(t => t.category === "hostel").length,
    finance: mockTickets.filter(t => t.category === "finance").length,
    library: mockTickets.filter(t => t.category === "library").length,
    transport: mockTickets.filter(t => t.category === "transport").length,
    other: mockTickets.filter(t => t.category === "other").length,
  },
  ticketsByPriority: {
    low: mockTickets.filter(t => t.priority === "low").length,
    medium: mockTickets.filter(t => t.priority === "medium").length,
    high: mockTickets.filter(t => t.priority === "high").length,
    urgent: mockTickets.filter(t => t.priority === "urgent").length,
  },
  recentTickets: mockTickets.sort((a, b) => b.created.getTime() - a.created.getTime()).slice(0, 5)
};

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

// Helper function to get ticket by ID
export const getTicketById = (id: string): Ticket | undefined => {
  return mockTickets.find(ticket => ticket.id === id);
};

// Function to get user's tickets
export const getUserTickets = (userId: string): Ticket[] => {
  return mockTickets.filter(ticket => ticket.createdBy === userId);
};

// Helper to get status display text
export const getStatusDisplayText = (status: TicketStatus): string => {
  switch (status) {
    case 'open': return 'Open';
    case 'in-progress': return 'In Progress';
    case 'resolved': return 'Resolved';
    case 'closed': return 'Closed';
    default: return status;
  }
};

// Helper to get category display text
export const getCategoryDisplayText = (category: TicketCategory): string => {
  switch (category) {
    case 'it': return 'IT Support';
    case 'academic': return 'Academic';
    case 'hostel': return 'Hostel';
    case 'finance': return 'Finance';
    case 'library': return 'Library';
    case 'transport': return 'Transport';
    case 'other': return 'Other';
    default: return category;
  }
};

// Helper to get priority display text
export const getPriorityDisplayText = (priority: TicketPriority): string => {
  switch (priority) {
    case 'low': return 'Low';
    case 'medium': return 'Medium';
    case 'high': return 'High';
    case 'urgent': return 'Urgent';
    default: return priority;
  }
};

// Get current logged in user (for demonstration)
export const getCurrentUser = (): User => {
  // In a real app, this would be determined by authentication
  // For demo purposes, we'll return the first student
  return mockUsers[0]; // Raj Patel (Student)
};
