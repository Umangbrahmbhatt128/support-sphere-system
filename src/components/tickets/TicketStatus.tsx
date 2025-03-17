
import React from 'react';
import { TicketStatus } from '@/types';
import { 
  AlertCircle, 
  Timer, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getStatusDisplayText } from '@/utils/mock-data';

interface TicketStatusIndicatorProps {
  status: TicketStatus;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TicketStatusIndicator = ({ 
  status, 
  size = 'md', 
  className 
}: TicketStatusIndicatorProps) => {
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-2.5',
    lg: 'text-base py-1.5 px-3',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const getStatusConfig = (status: TicketStatus) => {
    switch (status) {
      case 'open':
        return {
          icon: AlertCircle,
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-100',
        };
      case 'in-progress':
        return {
          icon: Timer,
          bg: 'bg-yellow-50',
          text: 'text-yellow-700',
          border: 'border-yellow-100',
        };
      case 'resolved':
        return {
          icon: CheckCircle,
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-100',
        };
      case 'closed':
        return {
          icon: XCircle,
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-100',
        };
      default:
        return {
          icon: AlertCircle,
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-100',
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={cn(
      'inline-flex items-center rounded-full border font-medium',
      config.bg,
      config.text,
      config.border,
      sizeClasses[size],
      className
    )}>
      <Icon className={cn('mr-1.5', iconSizes[size])} />
      {getStatusDisplayText(status)}
    </div>
  );
};

export default TicketStatusIndicator;
