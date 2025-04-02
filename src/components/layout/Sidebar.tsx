
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TicketIcon, 
  PlusCircle, 
  User, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const sidebarItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Tickets',
      icon: TicketIcon,
      path: '/tickets',
    },
    {
      name: 'New Ticket',
      icon: PlusCircle,
      path: '/new-ticket',
    },
    {
      name: 'Profile',
      icon: User,
      path: '/profile',
    },
  ];

  return (
    <aside className={cn(
      "h-screen w-64 fixed top-0 left-0 z-30 hidden md:block bg-white/80 backdrop-blur-md border-r border-gray-100",
      className
    )}>
      <div className="h-full flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center justify-center h-16 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-xl mr-1">Pragnya</span>
            <span className="text-purple-600 font-medium text-xl">Tech</span>
          </Link>
        </div>

        <div className="mt-8 flex-grow flex flex-col">
          <nav className="flex-1 px-4 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(item.path)
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5",
                  isActive(item.path) ? "text-white" : "text-gray-500"
                )} />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 mt-auto">
          <div className="space-y-2">
            <Link
              to="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
            >
              <HelpCircle className="mr-3 h-5 w-5 text-gray-500" />
              Help & Support
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
            >
              <Settings className="mr-3 h-5 w-5 text-gray-500" />
              Settings
            </Link>
            <Link
              to="/"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="mr-3 h-5 w-5 text-red-500" />
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
